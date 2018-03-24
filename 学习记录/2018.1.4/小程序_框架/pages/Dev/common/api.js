
let baseUrl = 'http://172.17.28.68:8080/pinturetail-api/';//志飞
/**
 * 社区
 */
  //发布招标帖：tenderTime=& title=& content=123& author=user4
exports.community_postTenderBbs = baseUrl + 'community/postTenderBbs';
  //获取招标列表：pageNum
exports.community_queryTenderBbsList = baseUrl + 'community/queryTenderBbsList';
  //获取招标帖子详情：id
exports.community_getTenderBbsDetail = baseUrl + 'community/getTenderBbsDetail';
  //通过标题查询招标帖子：pageNum
exports.community_queryTenderBbsListByTitle = baseUrl + 'community/queryTenderBbsListByTitle';
  //会议活动
exports.community_queryActivityBbsList = baseUrl + 'community/queryActivityBbsList';
  //搜索会议活动
exports.community_queryActivityBbsListByTitle = baseUrl + 'community/queryActivityBbsListByTitle';
  //会议活动发帖
exports.community_postActivityBbs = baseUrl + 'community/postActivityBbs';