
let api = require('./api.js');

/**
 * GET
 */
function getData(url,data,callBack){
  wx.request({
    url: url,
    data:data,
    method:'GET',
    success:function(res){
      callBack(res);
    }
  })
}
/**
 * POST
 */
function postData(url,data,callBack){
  wx.request({
    url: url,
    data:data,
    method:'POST',
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success:function(res){
      callBack(res);
    }
  })
}

/**
 * 社区--招标
 */
  //  发布招标帖子
function community_postTenderBbs(deadline, title, content,userId,callBack){
  postData(
    api.community_postTenderBbs,
    {
      'tenderTime': deadline,
      'title': title,
      'content': content,
      'author': userId,
    },
    function(res){
      callBack(res);
    }
  )
}
  //  获取招标列表
function community_queryTenderBbsList(pageNum,callback){
  getData(
    api.community_queryTenderBbsList,
    {
      'pageNum': pageNum,
    },
    function(res){
      callback(res)
    }
  )

}
  //  获取招标帖子详情
function community_getTenderBbsDetail(id,callBack){
  getData(
    api.community_getTenderBbsDetail,
    {
      'id':id,
    },
    function(res){
      callBack(res);
    }
  )
}
  //  通过标题查询招标帖子
function community_queryTenderBbsListByTitle(pageNum, keyword,callBack){
  getData(
    api.community_queryTenderBbsListByTitle,
    {
      pageNum: pageNum,
      keyword: keyword,
    },
    function(res){
      callBack(res);
    }
  );
}
/**
 * 社区--活动
 */
  //  活动列表
function community_queryActivityBbsList(pageNum,callBack){
  getData(
    api.community_queryActivityBbsList,
    {
      pageNum: pageNum,
    },
    function(res){
      callBack(res);
    }
  );
}
  //  搜索活动
function community_queryActivityBbsListByTitle(pageNum, keyword,callBack){
  getData(
    api.community_queryActivityBbsListByTitle,
    {
      pageNum: pageNum,
      keyword: keyword,
    },
    function(res){
      callBack(res);
    }
  );

}
  //会议活动发帖
function community_postActivityBbs(activityTime, title, address, activityUrl, author,callBack){
  // wx.request({
  //   url: api.community_postActivityBbs,
  //   data:{
  //     'activityTime': activityTime,
  //     'title': title,
  //     'address': address,
  //     'activityUrl': activityUrl,
  //     'author': author,
  //   },
  //   method:'POST',
  //   header:{
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   success:function(res){
  //     callBack(res);
  //   }
  // })

  postData(
    api.community_postActivityBbs,
    {
      'activityTime': activityTime,
      'title': title,
      'address': address,
      'activityUrl': activityUrl,
      'author': author,
    },
    function(res){
      callBack(res);
    }
  )
}
















module.exports = {
  community_postTenderBbs: community_postTenderBbs,
  community_queryTenderBbsList: community_queryTenderBbsList,
  community_getTenderBbsDetail: community_getTenderBbsDetail,
  community_queryTenderBbsListByTitle: community_queryTenderBbsListByTitle,
  community_queryActivityBbsList: community_queryActivityBbsList,
  community_queryActivityBbsListByTitle: community_queryActivityBbsListByTitle,
  community_postActivityBbs: community_postActivityBbs,
}
