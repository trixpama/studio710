
    scotchApp.controller('fontController', function($scope, $route) {
        
        
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

        //this part calls the array and displays the listfont
        $scope.pairs = pairs[font];
         
        //this part listens to the font click and pushes the font on to favourites    
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

