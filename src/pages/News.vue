<template>
    <div class="news">
      <ul>
        <li v-for="(news,index) in NewsList" :key="index">
          <!-- 第一种写法 -->
          <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->
          <RouterLink :to="{
            path:'/news/detail',
            query:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }">{{ news.title }}</RouterLink>
        </li>
      </ul>
      <div class="news-content">
        <RouterView></RouterView>
      </div>
    </div>

    
  </template>
  
  <script setup lang="ts" name="News">
  import { reactive } from 'vue';

    const NewsList = reactive([
      {id:'dadw01',title:'大危机！！帅哥是谁！',content:'这是内容！！！！'},
      {id:'dadw02',title:'美女是谁！',content:'这是美女！！！！'},
      {id:'dadw03',title:'外星人是谁！',content:'这是外星人！！！！'},
      {id:'dadw04',title:'外星人是我！',content:'这是外星人的简介！！！！'}
    ])
  </script>
  
  <style scoped>
  /* 新闻 */
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
  }

  .news li::marker {
    color: #64967E;
  }

  .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
  }
  .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
  </style>