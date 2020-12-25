export const getUserInfo = () => {
    let userInfo = {
        "error_code": 0,
        "data": [{
            "id": '1',
            "usertitle": "我是业委",
            "username": "yewei",
            "password": "123456",
            "token": "12345",
            "title":"业委"
          },
          {
            "id": '2',
            "usertitle": "我是居委",
            "username": "juwei",
            "password": "123456",
            "token": "23456",
            "title":"居委"

          },
          {
            "id": '3',
            "usertitle": "我是物业",
            "username": "wuye",
            "password": "123456",
            "token": "23456",
            "title":"物业"
          },
          {
            "id": '4',
            "usertitle": "我是住户",
            "username": "zhuhu",
            "password": "123456",
            "token": "23456",
            "title":"住户"
          }
        ],
        "info":[{
            "title":"抗议:本小区实行全面封锁",
            "type":"公告",
            "subtitle":"新冠肺炎疫情，在一段时间的好转后,似乎出现...",
            "renwu":"物业"
        },
        {
          "title":"提议:抗议实行全面封锁",
          "type":"通知",
          "subtitle":"新冠肺炎疫情，在一段时间的好转后,似乎出现....",
          "renwu":"业委"

      }
      ]
    }
    return userInfo
}