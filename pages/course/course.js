// pages/detail/detail.js
var app = getApp()
Page({
  data: {
    currentTab: 0,
    tab1:'私教预约',
    tab2:'团体课预约',
    team:[{
      img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1147247466,330921672&fm=27&gp=0.jpg',
content:'动感单车',
    },{  img:'http://himg2.huanqiu.com/attachment2010/2015/0803/10/07/20150803100718671.jpg',
  content: '瑜伽',
    }],
    trainers: [{
        "img": 'http://img3.imgtn.bdimg.com/it/u=1924672793,3059555888&fm=27&gp=0.jpg',
        "name": '周瑜',
        "level": '国家一级运动员',
        "desc": '在健身俱乐部中一对一进行指导训练的专业健身教练,其具有互...，针对性等',
        "schedule": '立即预约'
      },
      {
        "img": 'http://img1.imgtn.bdimg.com/it/u=632121556,1788732339&fm=27&gp=0.jpg',
        "name": '谢敏',
        "level": '国家一级瑜伽教练',
        "desc": '在健身俱乐部中一对一进行指导训练的专业健身教练,其具有互...，针对性等',
        "schedule": '立即预约'
      }
    ]
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  //滑动切换
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})