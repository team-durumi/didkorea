# 개츠비101

## 개발 환경 만들기

- <https://www.gatsbyjs.org/tutorial/part-zero/>
- <https://www.gatsbyjs.org/docs/upgrading-node-js/>
- <https://www.gatsbyjs.org/starters/?v=2>

```bash
$ node --version
v12.16.1

# https://nodejs.org/ko/
# node lts 사용 추천 -- 대부분 모듈들이 이 버전을 기준으로 코드 작성. 에러 발생 확률 낮음.

$ brew search node
==> Formulae
libbitcoin-node     node-build          node@12 ✔           nodeenv
llnode              node-sass           node_exporter       nodenv
node ✔              node@10             nodebrew
==> Casks
nodebox                    nodeclipse                 soundnode

# brew install node@12
# 13,12 버전이 둘 다 있는 경우
$ brew unlink node --force && brew link --force node@12

$ brew install yarn
$ yarn add global gatsby-cli
# $ npm -g i gatsby-cli

$ gatsby --version
Gatsby CLI version: 2.10.8
Gatsby version: 2.18.25

$ cd { project-directory }
$ yarn # npm install
...
...
...
$ gatsby develop
```
