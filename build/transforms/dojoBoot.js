(function(){
	// must use this.require to make this work in node.js
	var require = this.require;
	!require.async && require(["dojo"]);
	require.boot && require.apply(null, require.boot);
})();
