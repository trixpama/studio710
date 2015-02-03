 // create the controller and inject Angular's $scope
    
scotchApp.controller('fontPairsController', function($scope, $route) {

    //we added this part

    var primeFont = decodeURIComponent($route.current.params.primeFont);

    console.log(primeFont);
    $scope.names = scotchApp.names;
    var name = scotchApp.name[0];

    if (primeFont) {

        var pairs = {
            //Serifs
                'Roboto Slab':[          
                    {name:'Roboto', cssName:'font-roboto'},
                    {name:'Raleway', cssName:'font-raleway'},
                    {name:'PT Serif', cssName:'font-pt-serif'},

                ],
                'EB Garamond':[
                    {name:'Open Sans', cssName:'font-open-sans'},
                    {name:'Anton', cssName:'font-anton'},
                    {name:'Kelly Slab', cssName:'font-kelly-slab'},

                ],
                 'Noto Serif':[
                    {name:'Open Sans', cssName:'font-open-sans'},
                    {name:'Noto Sans', cssName:'font-noto-sans'},
                    {name:'Lato', cssName:'font-lato'},

                ],
                'PT Serif':[
                    {name:'Lato', cssName:'font-lato'},
                    {name:'Oswald', cssName:'font-oswald'},
                    {name:'Arvo', cssName:'font-arvo'},

                ],
                'Quattrocento':[
                    {name:'Open Sans', cssName:'font-open-sans'},
                    {name:'Raleway', cssName:'font-raleway'},
                    {name:'Arvo', cssName:'font-arvo'},

                ],
            //Sans-Serifs
                'Open Sans':[          
                    {name:'Oswald', cssName:'font-oswald'},
                    {name:'Source Sans Pro', cssName:'font-sourse-sans-pro'},
                    {name:'Raleway', cssName:'font-raleway'},

                ],
                'Lato':[
                    {name:'Source Sans Pro', cssName:'font-sourse-sans-pro'},
                    {name:'Roboto', cssName:'font-roboto'},
                    {name:'Open Sans', cssName:'font-open-sans'},

                ],
                 'Roboto':[
                    {name:'Roboto Slab', cssName:'font-roboto-slab'},
                    {name:'Raleway', cssName:'font-raleway'},
                    {name:'Oswald', cssName:'font-oswald'},

                ],
                'Raleway':[
                    {name:'Open Sans', cssName:'font-open-sans'},
                    {name:'Oswald', cssName:'font-oswald'},
                    {name:'Lato', cssName:'font-lato'},

                ],
                'PT Sans':[
                    {name:'Lato', cssName:'font-lato'},
                    {name:'Roboto', cssName:'font-roboto'},
                    {name:'Arvo', cssName:'font-arvo'},

                ]
        }
    $scope.pairs = pairs[primeFont];
    }
});




        
        // });




    // scotchApp.controller('fontPairsController', function($scope, $route) {
        
        
    //     var primeFont = decodeURIComponent($route.current.params.primeFont);
        
    //     console.log(primeFont);
        
    //     if (primeFont) {
            
    //         // this should be in another controller with another view
            
    //         var pairs = {
    //             'Roboto Slab':[
    //                 {name:'Testing', cssName:'font-roboto-slab'},
    //                 {name:'EB Garamond', cssName:'font-eb-garamond'},
    //                 {name:'Noto Serif', cssName:'font-noto-serif'},
    //             ],
    //             'EB Garamond':[
    //                 {name:'Open Sans', cssName:'font-open-sans'},
    //                 {name:'Lato', cssName:'font-lato'},
    //             ]
    //         };           

    //         // $scope.sets = sets[primeFont];
            
    //         // $scope.primeFontClick = function() {
    //         //     console.log(this.primeFont);
    //         //     scotchApp.favorites.push(this.primeFont);
    //         //     $scope.favorites = scotchApp.favorites;
    //         //     // Display an info toast with no title
    //         //     toastr.success('Added to library!');      

    //         // };
            
    //     } else {}
            
    //         //keep this as your font selection controller
            
            
    //         //don`t list stuff as seperate variables, use an array and ng-repeat
        
        

    // });

