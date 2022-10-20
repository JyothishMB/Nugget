import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [
    new Post('Text manipulation','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis turpis vel tortor sollicitudin egestas. Sed elementum, ante id viverra pulvinar, dolor ligula posuere leo, sit amet porta urna nunc et urna. Praesent sit amet tincidunt ipsum, id efficitur turpis. Morbi cursus scelerisque enim, eu placerat velit cursus ultrices. Nam tempor ex tellus, vitae commodo leo aliquam eu. Nullam luctus et mi ac pretium. Aliquam at hendrerit magna, at condimentum odio. Integer blandit, urna sed rhoncus euismod, arcu dui suscipit magna, eget luctus arcu erat quis turpis. Aenean at risus vehicula, imperdiet nulla sit amet, viverra urna. Fusce fringilla placerat elit, nec interdum elit rutrum sit amet. Cras sollicitudin eros ut sapien consequat faucibus. Aenean placerat a leo ut molestie. Fusce id diam et turpis ultrices placerat a non elit. Vestibulum in tristique risus.','Jyothish Bhaskaran',new Date()),
    new Post('Lorem ipsum genration','Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce at orci eu ligula ultrices mollis. Etiam vulputate hendrerit dolor. Phasellus malesuada auctor purus ut consequat. Curabitur sed congue nisi. Quisque ut auctor sapien. Integer erat lectus, rhoncus et elit sit amet, vehicula molestie felis. Morbi rhoncus convallis lectus et tempus. Mauris pretium felis non sollicitudin mattis. Proin porttitor orci id condimentum mattis. Nulla pellentesque at leo faucibus consectetur. Vivamus sit amet tortor ut mi facilisis tristique bibendum et nibh. Aenean nisl nunc, sodales in facilisis at, vehicula et enim.','Johny',new Date()),
    new Post('Better ways of blogging','Proin et tortor sit amet turpis ultrices mollis vitae in sem. Vivamus dictum dui sed metus semper aliquam. Nulla condimentum metus vitae dictum fermentum. Nullam feugiat justo tortor, eu ullamcorper dui imperdiet blandit. Duis facilisis commodo lacus ac porta. Aenean id pretium ante, vitae tincidunt odio. Sed ac ipsum in felis maximus pulvinar. Donec nec sapien a elit facilisis tincidunt. Sed laoreet vitae eros vel feugiat. Donec ac enim odio.','K T Mirach',new Date()),
    new Post('Secure your posts in simple ways','Morbi eu efficitur nulla. Duis gravida vestibulum magna id aliquet. Nulla sollicitudin lectus vitae dolor tempus, ac ultricies augue molestie. Integer vel placerat ligula. Sed suscipit ornare molestie. Curabitur bibendum nunc nec metus ultrices, congue cursus nibh faucibus. Aliquam lacinia ac lorem et convallis. Sed mollis at ipsum eu rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur et libero consequat, porttitor nunc sed, vestibulum lacus.','Master Tintumon',new Date()),
  ];
  
  /**
   *
   */
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
