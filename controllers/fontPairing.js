
    scotchApp.controller('fontPairsController', function($scope, $route) {
        
        
        var pairs = decodeURIComponent($route.current.params.font);
        
        console.log(pairs);
        
        if (pairs) {
            
            //this should be in another controller with another view
            
            var pairs = {
                'Roboto Slab':[
                    {name:'Roboto Slab', cssName:'font-roboto-slab'},
                    {name:'EB Garamond', cssName:'font-eb-garamond'},
                    {name:'Noto Serif', cssName:'font-noto-serif'},
                 
                ],
                'fontGaramond':[
                    {name:'Open Sans', cssName:'font-open-sans'},
                    {name:'Lato', cssName:'font-lato'},
                    {name:'Roboto', cssName:'font-roboto'}
            
                ]
            };           

            $scope.pairs = pairs[font];
            
            $scope.fontClick = function() {
                console.log(this.font);
                scotchApp.favorites.push(this.font);
                $scope.favorites = scotchApp.favorites;
                // Display an info toast with no title
                toastr.success('Added to library!');      

            };
            
        } else {
            
            //keep this as your font selection controller
            
            
            //don`t list stuff as seperate variables, use an array and ng-repeat
            
        }
        
        

    });

