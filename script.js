//makes sure that the scroll effect on the site is smooth and does not impact the height of each page 
function scrollPage(){
	if(this.id === 'first-page'){
		window.scrollTo({
  			top: window.innerHeight * 2,
  			left: 0,
  			behavior: 'smooth'
		});
		}
	}

function scrollPage(){
	if(this.id === 'second-page'){
		window.scrollTo({
  			top: window.innerHeight * 2,
  			left: 0,
  			behavior: 'smooth'
		});
		}
	}

function scrollPage(){
	if(this.id === 'third-page'){
		window.scrollTo({
  			top: window.innerHeight * 2,
  			left: 0,
  			behavior: 'smooth'
		});
	}

	if(this.id === 'fourth-page'){
		window.scrollTo({
  			top: window.innerHeight * 3,
  			left: 0,
  			behavior: 'smooth'
		});
	}
}


