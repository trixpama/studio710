    
        // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope, $route) {
        // create a message to display in our view

        var font = decodeURIComponent($route.current.params.font);
        
        console.log(font);
        
        if (font) {
            
            //this should be in another controller with another view
            
            var pairs = {
                'fontSerif':[
                    {name:'Roboto Slab', cssName:'font-roboto-slab'},
                    {name:'EB Garamond', cssName:'font-eb-garamond'},
                    {name:'Noto Serif', cssName:'font-noto-serif'},
                    {name:'PT Serif', cssName:'font-pt-serif'},
                    {name:'Quattrocento', cssName:'font-quattrocento'}
                ],
                'fontSansSerif':[
                    {name:'Open Sans', cssName:'font-open-sans'},
                    {name:'Lato', cssName:'font-lato'},
                    {name:'Roboto', cssName:'font-roboto'},
                    {name:'Raleway', cssName:'font-raleway'},
                    {name:'PT Sans', cssName:'font-pt-sans'}
                ]
            }; 
        $scope.favorites = scotchApp.favorites;
        }
    });
