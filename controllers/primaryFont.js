//matt's example
// create the controller and inject Angular's $scope
    scotchApp.controller('primaryFontController', function($scope) {
        $scope.primaryFont = [
        {name:'open sans', cssName:'font-open-sans'},
        {name:'open awfeawef', cssName:'font-open-awefawefawefawe'},
        {name:'open awefawef', cssName:'font-open-wefawef'},
        {name:'open ttttttttt', cssName:'font-open-awefawefe'},
        {name:'open vvvvvvvv', cssName:'font-open-awfaw'},
          ]
    });




//this is our code
    // scotchApp.controller('primaryFontController', function($scope, $route) {
        
        
    //     var font = decodeURIComponent($route.current.params.font);
        
    //     console.log(font);
        
    //     if (font) {
            
    //         //this should be in another controller with another view
            
    //         var primaryFont = {
    //             'serifs':[
    //                 {name:'open sans', cssName:'font-open-sans'},
    //                 {name:'open awfeawef', cssName:'font-open-awefawefawefawe'},
    //                 {name:'open awefawef', cssName:'font-open-wefawef'},
    //                 {name:'open ttttttttt', cssName:'font-open-awefawefe'},
    //                 {name:'open vvvvvvvv', cssName:'font-open-awfaw'}
    //             ],
    //             'sans serifs':[
    //                 {name:'open sans', cssName:'font-open-sans'},
    //                 {name:'open awfeawef', cssName:'font-open-awefawefawefawe'},
    //                 {name:'open awefawef', cssName:'font-open-wefawef'},
    //                 {name:'open ttttttttt', cssName:'font-open-awefawefe'},
    //                 {name:'open vvvvvvvv', cssName:'font-open-awfaw'}
    //             ]
    //         };
            
            
    //         $scope.serifs = serifs[font];
            
    //         $scope.fontClick = function() {
    //             console.log(this.font);
    //             scotchApp.favorites.push(this.font);
                
    //             $scope.favorites = scotchApp.favorites;
    //         };
            
    //     } else {
            
    //         //keep this as your font selection controller
            
            
    //         //don`t list stuff as seperate variables, use an array and ng-repeat
            
            
            
    //          $scope.font1 = 'Museo';
    //         $scope.font2 = 'Bodoni';
    //     $scope.font3 = 'Droid Serif';
    //     $scope.font4 = 'Times New Roman';
    //     $scope.font5 = 'Source Serif Pro';
            
    //     }
        
        

    // });

 //    scotchApp.controller('contactController', function contactController($scope) {
	// $scope.contacts = [
 //     {'font': 'Museo'},
	// 	{'font': 'Bodoni'},
	// 	{'font': 'Droid Serif'},
	// 	{'font': 'Times New Roman'},
	// 	{'font': 'Source Serif Pro'},

	// 	);

