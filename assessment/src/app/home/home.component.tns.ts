import { Component, OnInit } from '@angular/core';
import { HttpRequestTnsService } from '../http-request-tns.service.tns';
import { SearchBar } from "ui/search-bar";



@Component({
  selector: 'home',
  templateUrl: './home.component.tns.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentTNS implements OnInit {
collection:any[];
collection1:any[];
myItems:any = [];
p:number;
total:number;
previousEnable:boolean;

  constructor(private data:HttpRequestTnsService) {
  this.total=0;
  this.p = 1;
  this.myItems = [];
  this.showData(this.p);
  this.previousEnable=false;
  this.searchEnable=false;
    
     
     
     this.collection1=[
{
  "login": "rainmattertech",
  "id": 7113145,
  "node_id": "MDQ6VXNlcjcxMTMxNDU=",
  "avatar_url": "https://avatars0.githubusercontent.com/u/7113145?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rainmattertech",
  "html_url": "https://github.com/rainmattertech",
  "followers_url": "https://api.github.com/users/rainmattertech/followers",
  "following_url": "https://api.github.com/users/rainmattertech/following{/other_user}",
  "gists_url": "https://api.github.com/users/rainmattertech/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rainmattertech/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rainmattertech/subscriptions",
  "organizations_url": "https://api.github.com/users/rainmattertech/orgs",
  "repos_url": "https://api.github.com/users/rainmattertech/repos",
  "events_url": "https://api.github.com/users/rainmattertech/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rainmattertech/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Rainmatter",
  "company": "Rainmatter Technology Pvt. Ltd.",
  "blog": "http://rainmatter.com",
  "location": "Bangalore, India",
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 1,
  "public_gists": 1,
  "followers": 80,
  "following": 0,
  "created_at": "2014-03-31T07:57:43Z",
  "updated_at": "2018-08-06T22:37:52Z"
},
{
  "login": "akshay3004",
  "id": 1241193,
  "node_id": "MDQ6VXNlcjEyNDExOTM=",
  "avatar_url": "https://avatars0.githubusercontent.com/u/1241193?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/akshay3004",
  "html_url": "https://github.com/akshay3004",
  "followers_url": "https://api.github.com/users/akshay3004/followers",
  "following_url": "https://api.github.com/users/akshay3004/following{/other_user}",
  "gists_url": "https://api.github.com/users/akshay3004/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/akshay3004/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/akshay3004/subscriptions",
  "organizations_url": "https://api.github.com/users/akshay3004/orgs",
  "repos_url": "https://api.github.com/users/akshay3004/repos",
  "events_url": "https://api.github.com/users/akshay3004/events{/privacy}",
  "received_events_url": "https://api.github.com/users/akshay3004/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Akshay Gupta",
  "company": "HackerRank",
  "blog": "",
  "location": "Bangalore",
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 1,
  "public_gists": 1,
  "followers": 16,
  "following": 0,
  "created_at": "2011-12-05T08:42:03Z",
  "updated_at": "2018-08-14T08:13:46Z"
},
{
  "login": "basahota",
  "id": 25712816,
  "node_id": "MDQ6VXNlcjI1NzEyODE2",
  "avatar_url": "https://avatars0.githubusercontent.com/u/25712816?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/basahota",
  "html_url": "https://github.com/basahota",
  "followers_url": "https://api.github.com/users/basahota/followers",
  "following_url": "https://api.github.com/users/basahota/following{/other_user}",
  "gists_url": "https://api.github.com/users/basahota/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/basahota/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/basahota/subscriptions",
  "organizations_url": "https://api.github.com/users/basahota/orgs",
  "repos_url": "https://api.github.com/users/basahota/repos",
  "events_url": "https://api.github.com/users/basahota/events{/privacy}",
  "received_events_url": "https://api.github.com/users/basahota/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Basant kumar Hota",
  "company": "Accenture",
  "blog": "https://www.youtube.com/channel/UCORuRdpN2QTCKnsuEaeK-kQ",
  "location": "Bangalore",
  "email": null,
  "hireable": null,
  "bio": "A software developer on JDK and JEE platform. I am passionate about Java technology and always an explorer and learner in new technologies in Java",
  "public_repos": 1,
  "public_gists": 0,
  "followers": 21,
  "following": 4,
  "created_at": "2017-02-11T21:24:01Z",
  "updated_at": "2018-08-14T15:54:16Z"
}

];











this.xy();



   this.collection = ['Yaseen',"hello",'3','4','5','6','1','2','34','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6','1','2','3','4','5','6']; 
   



    }

  ngOnInit() {

 
  }
  showData(page:number){
  this.data.getConfigTns(page)
  .subscribe(
  (response)=>{
  
console.log(response);
this.total=response.total_count;
this.collection=response['items'];
//alert(this.total);

  this.collection.forEach((item)=>{

   //alert(item['url']);
   this.data.getConfigUrlTns(item['url'])
  .subscribe(
  (response)=>{
 // alert(response['name']);
  
  
  
  this.collection1.push(response);
  this.myItem.push(response)
   
   //alert(this.collection1['name']);
   },
  (err)=>console.log(err)
 
  );
  });



  },
  (err)=>console.log(err)
 
  );



  }

  xy(){
  console.log(this.collection1[0]);
  }
 /* pageChanged(e){
  this.p=e;
  
  if(this.p%3===0){
  let page=(this.p/3)+1;
   this.showData(page);

  }
  }*/
  onTapNext(){
  this.p=this.p+1;
  let page=this.p;
  //alert(page);
  this.showData(page);
  }
   onTapPrevious(){
   let page;
   if(this.p===1){
   
   this.previousEnable=false;

  
  }else{
  this.previousEnable=true;
  this.p=this.p-1;
  page=this.p;
  this.showData(page);
  
  }
  
  //alert(this.previousEnable);
  }


   public onSubmit(args) {
         let searchBar = <SearchBar>args.object;
        let searchValue = searchBar.text.toLowerCase();

        this.myItems = [];
        if (searchValue !== "") {
            this.collection1.forEach((item)=>{
             if (item.name.toLowerCase().indexOf(searchValue) !== -1) {
                    this.myItems.push(item);
                    
                    }
                    }
                    });
               
                
            }
       
    

    public onTextChanged(args) {
      let searchBar = <SearchBar>args.object;
        let searchValue = searchBar.text.toLowerCase();

        this.myItems = [];
        if (searchValue !== "") {
            this.collection1.forEach((item)=>{
             if (item.name.toLowerCase().indexOf(searchValue) !== -1) {
                    this.myItems.push(item);
                    
                    }
                    }
                    });
               

    }
       public onClear(args) {
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.hint = "Search";

        this.myItems = [];
        this.collection1.forEach(item => {
            this.myItems.push(item);
        });
    }

    onSearchTap(){
    if(searchEnable===true){
    this.searchEnable=false;
    }else{
    this.searchEnable=true;
    }
    }


}



