var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["私教记录", "入场记录", "请假记录"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    trainingbackground: {
      img: 'http://himg2.huanqiu.com/attachment2010/2015/0803/10/07/20150803100718671.jpg',
      trainerAvanta: 'http://img5.duitang.com/uploads/item/201408/25/20140825000456_KjEmr.thumb.700_0.jpeg',
      trainerName:'教练 simon',
      trainerCall:'../../img/training/traininghistory/call.png',
      trainingname:'瑜伽',
      trainingleftnum:'12'
    }

  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});