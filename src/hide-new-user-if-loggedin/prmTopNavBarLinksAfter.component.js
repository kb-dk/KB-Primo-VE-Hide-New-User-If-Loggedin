class PrmTopNavBarLinksAfterController {
    constructor() {
    };

    $onInit() {
        this.isLoggedIn = this.parentCtrl.isLoggedIn;
        // Hide new user button if logged in
        if (this.isLoggedIn) {
            angular.element(document).ready(function () {
                let newUser = angular.element(document.querySelector('div[data-main-menu-item="new_user"]'));
                if (newUser) {
                    if (newUser.length !== 0) {
                        newUser.css('display', 'none');
                    }
                }
            });
        }
    };
}

export let PrmTopNavBarLinksAfterConfig = {
    name: 'prmTopNavBarLinksAfter',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: PrmTopNavBarLinksAfterController,
    },
}
