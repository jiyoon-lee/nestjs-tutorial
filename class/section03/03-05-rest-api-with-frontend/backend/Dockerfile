FROM node:18

COPY ./package.json /myFolder/
COPY ./yarn.lock /myFolder/
WORKDIR /myFolder
RUN yarn

COPY . /myFolder/

CMD yarn start:dev