FROM node:14

# 명령을 실행할 폴더 지정
WORKDIR /mini-project/
COPY ./package.json /mini-project/
COPY ./yarn.lock /mini-project/
RUN yarn install

COPY . /mini-project/


CMD yarn dev



