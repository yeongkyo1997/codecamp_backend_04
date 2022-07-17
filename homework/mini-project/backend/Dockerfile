FROM node:14

# 명령을 실행할 폴더 지정
WORKDIR /myfolder/
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
RUN yarn install

COPY . /myfolder/


CMD yarn dev



