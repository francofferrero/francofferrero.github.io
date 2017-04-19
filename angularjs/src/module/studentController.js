mainApp.controller("studentController", function($scope) {
   $scope.student = {
      firstName: "Mahesh",
      lastName: "Parashar",
      fees:500,
      
      subjects:[
         {name:'Fisica',marks:70},
         {name:'Quimica',marks:80},
         {name:'Matematicas',marks:65},
         {name:'Ingles',marks:75},
         {name:'Hindi',marks:67}
      ],
      
      fullName: function() {
         var studentObject;
         studentObject = $scope.student;
         return studentObject.firstName + " " + studentObject.lastName;
      }
   };
});
