//allows for the site to scroll to a specific position under certain conditions and makes sure it is smooth when doing so
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


