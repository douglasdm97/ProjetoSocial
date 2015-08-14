<div style="margin: 0 auto; max-width:920px;width:100%">
	
	<div layout="row" layout-wrap>

		<div flex="66">
			 <div ui-view>
			</div>

		</div>
		<div ng-show="widget" flex="33">
			<?php include('pages/widget.php'); ?>
		</div>
	</div>






</div>


<md-progress-circular  style="position: fixed;
    left: 240px;
    z-index: 10000;
    right: 0px;
    top: 10px;" ng-show="carregando" class="md-hue-2" md-mode="indeterminate"></md-progress-circular>