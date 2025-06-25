# ====================
# Build stage
# ====================
FROM node:20-alpine AS builder

WORKDIR /app

# 종속성 설치 (캐시 활용)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm ci

# 소스 복사
COPY . .

# Next.js build
RUN npm run build

# ====================
# Production stage
# ====================
FROM node:20-alpine AS runner

WORKDIR /app

# node_modules 복사 (production deps만 필요하면 npm prune --production 추가 가능)
COPY --from=builder /app/node_modules ./node_modules

# 빌드 산출물 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Next.js는 3000 포트를 사용
EXPOSE 3000

CMD ["npm", "run", "start"]
