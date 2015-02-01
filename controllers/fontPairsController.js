        // create the controller and inject Angular's $scope
    scotchApp.controller('fontPairsController', function($scope, $route) {
//we added this part
    var primeFont = decodeURIComponent($route.current.params.primeFont);

    console.log(primeFont);

if (primeFont) {
            
            // this should be in another controller with another view
            
            var pairs = {
                'Roboto Slab':[
                    {name:'Testing', cssName:'font-roboto-slab'},
                    {name:'EB Garamond', cssName:'font-eb-garamond'},
                    {name:'Noto Serif', cssName:'font-noto-serif'},
                ],
                'EB Garamond':[
                    {name:'Open Sans', cssName:'font-open-sans'},
                    {name:'Lato', cssName:'font-lato'},
                ]
            };



        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';


        
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

