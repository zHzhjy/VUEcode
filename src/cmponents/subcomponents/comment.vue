<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多120字节）" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          # 1楼 &nbsp;&nbsp; 用户:匿名&nbsp;&nbsp; 发表时间: 2019-06-29 13:21:13
        </div>
        <div class="cmt-body">
          我不知道你在说什么！
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
          # 2楼 &nbsp;&nbsp; 用户:匿名&nbsp;&nbsp; 发表时间: 2019-06-29 13:21:13
        </div>
        <div class="cmt-body">
          我不知道他在说什么。
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
          # 3楼 &nbsp;&nbsp; 用户:匿名&nbsp;&nbsp; 发表时间: 2019-06-29 13:21:13
        </div>
        <div class="cmt-body">
         你们知道他在说什么吗?
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
          # 4楼 &nbsp;&nbsp; 用户:匿名&nbsp;&nbsp; 发表时间: 2019-06-29 13:21:13
        </div>
        <div class="cmt-body">
          我不知道他在说什么。
        </div>
      </div>
    </div>
    
    <mt-button type="danger" size="large" plain >加载更多</mt-button>
  </div>
</template>

<script>
/* 没有接口 暂时不写获取了 */ 
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
