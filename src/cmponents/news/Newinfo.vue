<template>
    <div class= "newinfo-container">
        <h3 class="title">春游合集</h3>
        <p class="subtitle">
            <span>发表时间:  </span>
                <span>点击: 0次</span>
        </p>  
        <hr>
        <!-- 内容区域-->
        <div class="content">
            
        </div>
         <!-- 评论子组件区域 -->
    <comment-box ></comment-box>

    </div>
</template>

<script>

import comment from '../subcomponents/comment.vue'



export default {
     components: {
    // 用来注册子组件的节点
    "comment-box": comment
  }  
}
</script>


<style lang="scss" scoped>

.newinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>