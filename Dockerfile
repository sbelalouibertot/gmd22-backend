FROM node:16

ENV NODE_ENV production
ENV DATABASE_URL $DATABASE_URL
ENV NOTIFICATION_ACCOUNT_KEY $NOTIFICATION_ACCOUNT_KEY

WORKDIR /src

COPY package.json package-lock.json ./
RUN npm i --only=production --legacy-peer-deps
RUN npm i prisma --legacy-peer-deps

COPY dist ./dist
COPY prisma ./prisma

RUN npx prisma generate
RUN mv src/generated ./dist/generated

EXPOSE 4000

ENV PORT 4000

CMD ["node", "dist/index.js"]