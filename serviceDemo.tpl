<h1>Service Demo</h1>
<p>My name: <strong>{{ name }}</strong></p>
<p>Friends:</p>
<ul>
 <li *ng-for="#name of names">
    {{ name }}
 </li>
</ul>
<p *ng-if="names.length > 3">You have many friends!</p>