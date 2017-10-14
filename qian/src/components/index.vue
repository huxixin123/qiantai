<template>

	<div class="box">
		<div class="head">
			<h3 class="title">个人博客</h3>
			<div class="select">
			<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

			  <el-submenu :index="item.onedata.cnname" v-for="item in datas">
			    <template slot="title">{{item.onedata.cnname}}</template>
			    <el-menu-item :index="it.cnname" v-for="it in item.twodata">
				
			    {{it.cnname}}
			
			    </el-menu-item>
			    
			    
			  </el-submenu>
			</el-menu>

			</div>
		</div>
		<div class="titleBar">
		<span>首页 /</span>
		<span>{{key}} /</span>
		<span>{{keyPath}}</span>
		</div>
		<div class="bodyGet">
			<div class="leftBar">
				<!-- <router-view></router-view> -->
				<template>
				  <el-table
				    :data="oldData"
				    style="width: 100%"
				    :row-class-name="tableRowClassName">
				    <el-table-column
				      prop="article_name"
				      label="标题"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="cnname_one"
				      label="分类"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="editer"
				      label="作者">
				    </el-table-column>
				    <el-table-column
				      prop="TIME"
				      label="发布时间">
				    </el-table-column>
				  </el-table>
				</template>			
			</div>
			<div class="rightBar">
				<div class="nav">
				<p class="all">全站搜索</p>
				<div class="serach">
					<el-input v-model="input" placeholder="请输入内容"></el-input>
					<el-button type="primary" icon="search" class='inputSerach'>搜索</el-button>
				</div>
				</div>
				<div class="nav">
					<template>
					  <el-table
					    :data="tableData"
					    border
					    style="width: 100%;">
					    <el-table-column
					      prop="date"
					      label="点击排行"
					      sortable
					      width="auto">
					    </el-table-column>
					  </el-table>
					</template>
				</div>
				<div class="nav">
					<template>
					  <el-table
					    :data="oldData"
					    border
					    style="width: 100%;">
					    <el-table-column
					      prop="article_name"
					      label="最新文章"
					      sortable
					      width="auto">
					    </el-table-column>
					    
					    <el-table-column
					      prop="TIME"
					      label="时间"
					      sortable
					      width="auto">
					    </el-table-column>
					  </el-table>
					</template>
				</div>
				</div>
			</div>
		</div>
	
	</template>

<script>
	export default{
		name:"index",
		data() {
		      return {
		        activeIndex: '1',
        		activeIndex2: '1',
		        value: '',
		        input: '',
		        key:'技术',
		        keyPath:'美食',
		        tableData: [{
		          date: '2016-05-02'

		        }, {
		          date: '2016-05-04'

		        }, {
		          date: '2016-05-01'

		        }, {
		          date: '2016-05-03'

		        }],
		        datas:[],
		        qian:[],
		        oldData:[]
		      }
    	},
    	methods:{
	        formatter(row, column) {
		        return row.address;
		    },
		      filterTag(value, row) {
		        return row.tag === value;
		    },
		      handleSelect(key, keyPath) {
		      	// console.log(key)
		      	// console.log(keyPath)
		        this.key = keyPath[0];
		        this.keyPath = keyPath[1];
		        var _this = this;
		      		// if(keyPath[0] == "技能"){
		      			this.axios.get(
						  "http://localhost:9999/api/front_article/getArticleAll"
						)
						.then(function(result){
							switch(result.data.code){
								case "6012":
									_this.oldData = [];
									_this.qian = result.data.data;
									_this.qian.forEach(function(i){
										if(i.cnname_two === keyPath[1]){
											_this.oldData.push(i)
											console.log(_this.oldData)
										}
									})
								break;
							}
						})
						.catch(function(err){
			                console.log(err);
			            })
		    },
		    tableRowClassName(row, index) {
		        if (index === 1) {
		          return 'info-row';
		        } else if (index === 3) {
		          return 'positive-row';
		        }
		        return '';
	        }

    	},
    	created(){
    		var _this = this;
    		this.axios({
				url:"http://localhost:9999/api/front_article/getNav"
			})
			.then(function(result){
				switch(result.data.code){
					case "6010":
						_this.datas = result.data.data;
					break;
					case "6011":
						console.log("失败")
					break;
				}
			})
			.catch(function(err){
                console.log(err);
            })

            this.axios.get(
			  "http://localhost:9999/api/front_article/getArticleAll"
			)
			.then(function(result){
				switch(result.data.code){
					case "6012":
						_this.oldData = [];
						_this.oldData = result.data.data;
					break;
				}
			})
			.catch(function(err){
                console.log(err);
            })
    	}
    	
	}
</script>
<style>
	html,body{
		width: 100%;
		height: 100%;
		background: url(../../static/img/1.jpg) no-repeat;
		/*background: #f9f8f8;*/
		font-family: "微软雅黑";
		position: relative;
	}
	.box{
		
		padding: 10px 10px;
	}
	.nav .el-table__body-wrapper{
		height: 200px;
	}
	.nav .el-table__row td{
		height: 20px;
	}
	.nav{
		display: flex;
		padding: 10px 10px;
		flex-direction: column;
	}
	.inputSerach{
		background: #fff;
	}
	.titleBar{
		width: 100%;
		height: 30px;
		font-size: 14px;
		color:black;
		
		line-height: 30px;
	}
	.el-table_1_column_4{
		width: 100%;
	}
	.el-table--enable-row-transition{
		width: 100%;
	}
	.all{
		/*margin: 5px 5px;*/
		border-radius: 5px;
		background: orange;
		display: flex;
		align-items: center;
		color:#fff;
		height: 30px;
		font-size: 14px;
		justify-content: center;
	}
	.select .el-input__inner{
		border:0;
		width: 100px;
		color:#ccc;
		background: #39387d;
		padding: 0 20px;
	}
	.bodyGet{
		width: 80%;
		display: flex;
		margin: 0 auto;
	}
	.head{

		/*height: 80px;*/
		width: 100%;
		display: inline-block;
		background: #324157;

		display: flex;
	}
	.select{
		padding-left:50px;
		display: flex;
		/*height: 80px;*/
		align-items: center;
	}
	.title{
		width: 100px;
		/*height: 80px;*/
		display: flex;
		justify-content: center;
		align-items: center;
		color:#fff;
	}
	.leftBar{
		width: 75%;
		margin: 0 10px;
		height: 400px;
	}
	.rightBar{
		width: 25%;
		background: rgba(0,0,0,0.5);
	}
	.el-table .info-row {
      background: #c9e5f5;
    }
    .cell{
    	text-align: center;
    }
	.el-button--primary{
		background: #20a0ff;
	}
    .el-table .positive-row {
      background: #e2f0e4;
    }
    .serach{
    	padding: 5px 5px;
    	display: flex;
    }
    .serach .el-input{
    	flex:8;
    	margin-right: 20px;
    }
 </style>