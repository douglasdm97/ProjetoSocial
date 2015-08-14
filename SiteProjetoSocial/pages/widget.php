<md-card ng-controller="perfilController">

<md-toolbar class="md-tall md-hue-2">
<span flex></span>
<div layout="column" class="md-toolbar-tools-bottom inset">

	<img class="user-avatar" src="{{pic_file}}" />
	
	<div>{{nickname}}</div>
	<div>{{email}}</div>
</div>

</md-toolbar>

<md-list> 
<md-subheader >Menu</md-subheader>


<md-list-item  ng-click="go('publicacoes')">
<md-icon md-svg-icon="icon/home.svg"></md-icon>
<p>Publicações</p>
</md-list-item>

<md-list-item ng-click="go('editarperfil')">
<md-icon md-svg-icon="icon/account.svg"></md-icon>
<p>Editar Perfil</p>
</md-list-item>


<md-list-item ng-click="expression">
<md-icon md-svg-icon="icon/friends.svg"></md-icon>
<p>Seguidores</p>
</md-list-item>





</md-list>

</md-card>