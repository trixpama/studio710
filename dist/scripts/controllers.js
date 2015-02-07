var ClientList = angular.module('ClientList', []);

ClientList.controller('ClientListctrl', function ClientListctrl($scope) {
  $scope.clients = [
    {'name': 'Eugene Cunningham',
     'nickname': 'Eugene',
     'address': '7963 W Lone Mountain Road',
 	 'phone': '(636) 927-1964'},

 	{'name': 'Alberto Fleming',
     'nickname': 'Bert',
     'address': '7083 Watika Street',
 	 'phone': '(591) 277-5042'},

	{'name': 'Wanda Harris',
     'nickname': 'Wanda',
     'address': '4205 Crescent Canyon Street',
 	 'phone': '(647) 684-7504'},

 	 {'name': 'Darlene Steward',
     'nickname': 'Dar',
     'address': '6902 Parker Road',
 	 'phone': '(591) 358-4454'}
  ];
  
});