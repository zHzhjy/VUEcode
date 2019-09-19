<template>
  <div class="mui-card" style="margin-bottom: 35px;">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media">
                        <router-link to="/home/newinfo">
							<img class="mui-media-object mui-pull-right" src="../../images/timg (1).jpg">
							<div class="mui-media-body">
								春游合集
								<p class="mui-ellipsis">
                                    <span>发表时间:2019-09-11 12:12:55</span> 
                                    <span>点击: 99次</span>
                                </p>
							</div>
						</router-link>
					</li>
					<li class="mui-table-view-cell mui-media">
						<router-link to="/home/newinfo">
							<img class="mui-media-object mui-pull-right" src="../../images/timg (1).jpg">
							<div class="mui-media-body">
								秋游合集
								<p class="mui-ellipsis">
                                    <span>发表时间:2019-09-11 12:12:55</span> 
                                    <span>点击: 9次</span>
                                </p>
							</div>
						</router-link>
					</li>
                    <li class="mui-table-view-cell mui-media">
						<router-link to="/home/newinfo">
							<img class="mui-media-object mui-pull-right" src="../../images/timg (1).jpg">
							<div class="mui-media-body">
								冬游合集
								<p class="mui-ellipsis">
                                    <span>发表时间:2019-09-11 12:12:55</span> 
                                    <span>点击: 9次</span>
                                </p>
							</div>
						</router-link>
					</li>


                    <!-- 进行渲染  注释在这备用
                        <li class="mui-table-view-cell mui-media">
						<router-link :to="'路径' + item.id">
							<img class="mui-media-object mui-pull-right" :src=" item.***">
							<div class="mui-media-body">
								{{ item.**  }}
								<p class="mui-ellipsis">
                                    <span>发表时间:{{ item.*** | dataFormat }}</span> 
                                    <span>点击: {{ item.**** }}次</span>
                                </p>
							</div>
						</router-link>
					</li>
                    -->
				</ul>
			</div>
</template>
<script>

/*  接口导入备用
import { Toast } from "mint-ui";
export default {
    data: {
        return {
            newslist: [] //列表
        }
    },
    created () {    //再生命周期函数 created 中调用
        this.geyNewsList (); 
    }
    methods: {
        this.$http.get('').then(result => {
        getNewList () {
                if(result.body.status === 0) {
                    this.newslist = result.body.message;
                } else {
                    Toast ('获取失败/没有资源')
                }
            })
        }
    }

}
*/
</script>

<style lang="scss" scoped>

.mui-table-view {
    li {
        h1 {font-size: 15px}
        .mui-ellipsis {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
