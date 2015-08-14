<div class="list"> 

 	<md-card ng-repeat="i in [1,2]">
      <img ng-src="https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/11377538_1601810536741533_1962895443_n.jpg" class="md-card-image" alt="Washed Out">
      <div class="footer_img branqueia">
			<div class="dados">
				<button class="button like icon-left ion-heart">Gostei <span>225</span></button>
				<button class="button like icon-left red ion-heart-broken">Não gostei <span>3</span></button>
			</div>
			<img src="https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/11377538_1601810536741533_1962895443_n.jpg">
			
		</div>
      <md-card-content style="padding:0px">
       	<div class="categorias">
			<h3> Categorias:</h3>
			<p>
				<a class="">Fotos<i class="icon ion-arrow-right-b"></i>Bonitas</a>
				<a class="">Fotos<i class="icon ion-arrow-right-b"></i>Bonitas</a>
				<a>Fotos<i class="icon ion-arrow-right-b"></i>Bonitas</a>
				<a>Fotos<i class="icon ion-arrow-right-b"></i>Bonitas</a>
			</p>
		</div>
		<div class="comentarios">
			<!-- ngRepeat: i in [1,2] --><p ng-repeat="i in [1,2]" class="">
				<a>@jeandro</a>: Top
			</p><!-- end ngRepeat: i in [1,2] --><p ng-repeat="i in [1,2]" class="">
				<a>@jeandro</a>: Top
			</p><!-- end ngRepeat: i in [1,2] -->

			<button class="button  icon-left  ion-forward comentar">Comentar</button>
			<div style="clear: both"></div>
		</div>
      </md-card-content>
   
    </md-card>
  
</div>