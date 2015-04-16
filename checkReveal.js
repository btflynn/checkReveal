
  var revealCheckedBoxes = {
    // Array of all the checked checkboxes
    checkedBoxes: $('.channel-topic-dropdowns_topics input[type=checkbox]'),
    
    container: $('.channel-topic-dropdowns_parent'),
    
    // Returns true if checkbox is checked 
    isChecked: function(target){
    	return target.prop('checked');
  	},
    // Checks the container checkbox to open the container
    openContainer: function($el){
      var $container = $el.closest(this.container),
        	$containerCheckbox = $container.find('input[type=checkbox]').eq(0);
    	$containerCheckbox.prop('checked', true);
    },
    
    init: function(){
      // Reveal each checkbox currently checked, by opening the dropdown it's in. 
      for(var i=0; i < this.checkedBoxes.length; i++){
        $currentBox = $(this.checkedBoxes[i]);
        if(this.isChecked($currentBox)){
          this.openContainer($currentBox);
        }
      }
    }
  }
  
  $('button').on('click',function(){
    revealCheckedBoxes.init();
  });
