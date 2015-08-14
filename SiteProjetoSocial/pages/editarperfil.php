
<md-card style="padding:20px;">
<h2>Editar Perfil</h2>

<div class="foto"> 
	<label for="pic_file">
		<img src="{{pic_file}}" />

		<div style="margin:30px">
		<md-button md-no-ink class="md-raised md-primary icon">
		<md-icon md-svg-src="icon/photo.svg" style="width: 24px; height: 24px;"></md-icon>Aterar Foto</md-button>


			<input name='file'  ng-model="image" onchange="angular.element(this).scope().uploadImage()"  class='hidde' type="file" id='pic_file' >
		</div>

		


	</div>

	<md-input-container >
	<label>Usuario</label>
	<input ng-model="nickname" type="text">
</md-input-container>
<md-input-container >
<label>E-Mail</label>
<input ng-model="email" type="text">
</md-input-container>
<md-input-container >
<label>Telefone</label>
<input ng-model="phonenumber" type="text">
</md-input-container>

<hr />
<md-button ng-click="submit(nickname, email, phonenumber)" class="md-raised md-primary">Salvar Alterações</md-button>

</md-card>

