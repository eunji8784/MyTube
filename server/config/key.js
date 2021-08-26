if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}

//개발 환경이 local일수도, deploy한 이후에 production 모드로 개발할 수도 있다.
//따라서 앱을 시작하면 이 앱 자체에서 지금 우리가 local에서 작업을 하는지, production 모드로 작업을 하고 있는지 분기 처리를 해서 인식을 한다.

//만약 production 모드라면 ./prod.js에서 변수를 읽는다.
//만약 local 모드라면, ./dev.js에서 변수를 읽는다.