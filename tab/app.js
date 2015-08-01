var app=angular.module('columnPinningSpike',['datatables', 'datatables.fixedcolumns']);

app.controller('columnPinCtrl',['$scope','DTOptionsBuilder',function($scope,DTOptionsBuilder){

    var vm = this;
    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('scrollY', '425px')
        .withOption('scrollX', '100%')
        .withOption('scrollCollapse', true)
        .withOption('paging', false)
        .withOption('ordering', false)
        .withOption('info', false)
        .withFixedColumns({
            leftColumns: 1
        });

    $scope.thead=[{
        displayName:'Hi'
    },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        },
        {
            displayName:'Hi'
        }];
}]);

app.directive('customDataTable',function($timeout){
    return {
        templateUrl:'customDataTable.html',
        restrict:'E',
        transclude:true,
        link:{
            post:function(scope,element) {
                $timeout(function () {
                    element.bind('mouseover',function(){
                        element.find('custom-table-scroll').show();
                    });
                    element.bind('mouseout',function(){
                        element.find('custom-table-scroll').hide();
                    });
                })
            }

        }
    }
});

app.directive('customTableScroll',function($timeout){
    return {
        restrict:'AE',
        templateUrl:'custom-hor-scroll.html',
        link:{
            post:function(scope,element,attrs) {
                $timeout(function () {
                    var scrollX=Number(attrs.scrollX);
                    var offsetX=Number(attrs.offsetX);

                    element.bind('click',function(evt){

                        var containerWidth=angular.element('#'+attrs.innerTableContainer).width();
                        var outerContainer=angular.element('.'+attrs.outerTableContainer);
                        var toScroll=containerWidth/offsetX;
                        var dir=evt.target.id;

                        if(scrollX>containerWidth){
                            scrollX=containerWidth;
                            evt.preventDefault();
                            evt.stopPropagation();
                            return false;
                        }
                        else if(scrollX<0){
                            scrollX=0;
                            evt.preventDefault();
                            evt.stopPropagation();
                            return false;

                        }
                        if(dir=='customScrollLeft' && scrollX>0) {
                            scrollX=scrollX-toScroll;
                            outerContainer.animate({scrollLeft:scrollX});
                        }
                        else if(dir=='customScrollRight' && scrollX+outerContainer.width()<containerWidth) {
                            scrollX=scrollX+toScroll;
                            outerContainer.animate({scrollLeft:scrollX});
                        }
                    });

                });
            }
        }
    }
});
