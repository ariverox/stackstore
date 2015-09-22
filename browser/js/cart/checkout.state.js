app.config(function($stateProvider) {
    $stateProvider.state("checkout", {
        url: "/checkout",
        templateUrl: "js/cart/checkout.html",
        controller: "CheckoutCtrl",
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser()
            },
            cart: function(user, ProductFactory, localStorageService) {
            	var itemCart = user ? (user.cart || []) : (localStorageService.get('items') || []);

            	return Promise.all(itemCart.map(item => {
            		var q = item.quantity;
            		return ProductFactory.getOne(item._id)
            		.then(result => ({
            			product: result,
            			quantity: q
            		}))
            	}));
            }
        }

    });
});


// <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.0/angular.min.js"></script>
// 		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.0/angular-animate.min.js"></script>
// 		<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
// 		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>


// 		<!-- angular-payments library - you probably want to install it through either bower or npm -->
// 		<script src="http://cdn.rawgit.com/laurihy/angular-payments/2472bc9befa256780d106a8e53a9dea12b7341ed/lib/angular-payments.js"></script>

// 		<!-- other angular.js modules -->
// 		<script src="http://pineconellc.github.io/angular-foundation/mm-foundation-tpls-0.3.1.js"></script>
// 		<script src="http://cdnjs.cloudflare.com/ajax/libs/spin.js/2.0.1/spin.js"></script>
// 		<script src="http://cdnjs.cloudflare.com/ajax/libs/angular-spinner/0.5.1/angular-spinner.js"></script>
// 		<script type="text/javascript">
//   // This identifies your website in the createToken call below
//   			Stripe.setPublishableKey('pk_live_CcnxR0mhrAsvi99OixDe6ms6');
//   // ...
// 			</script>

// 		<!-- our code -->
// 		<div class="row">
// 			<md-content class= "col-lg-6 col-md-6 col-sm-12">
// 								<md-input-container>


// <form id="buy-form" method="post" action="javascript:">
             
//             <p class="form-label">First Name:</p>
//             <input class="text" id="first-name" spellcheck="false"></input>
             
//             <p class="form-label">Last Name:</p>
//             <input class="text" id="last-name" spellcheck="false"></input>
             
//             <p class="form-label">Email Address:</p>
//             <input class="text" id="email" spellcheck="false"></input>
             
//             <p class="form-label">Credit Card Number:</p>
//             <input class="text" id="card-number" autocomplete="off" data-stripe="number"></input>
             
//             <p class="form-label">Expiration Date:</p>
//             <select id="expiration-month" data-stripe="exp-month">
//             <option value="1">January</option>
//             <option value="2">February</option>
//             <option value="3">March</option>
//             <option value="4">April</option>
//             <option value="5">May</option>
//             <option value="6">June</option>
//             <option value="7">July</option>
//             <option value="8">August</option>
//             <option value="9">September</option>
//             <option value="10">October</option>
//             <option value="11">November</option>
//             <option value="12">December</option>
//             </select>

             
//             <input class="text" id="expiration-date" placeholder="Enter Year" style="height:20px" data-stripe="exp-year">
      

// 		  			</input>
             
//             <p class="form-label">CVC:</p>
//             <input class="text" id="card-security-code" autocomplete="off" data-stripe="cvc"></input>
             
//             <input id="buy-submit-button" type="submit" value="Place This Order »"></input>
//         </form>
//       </div>

