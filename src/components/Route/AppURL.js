class AppURL {
    home() {
        return '/';
    }

    feature() {
        return '/feature'
    }

    viewEmailPost() {
        return `/feature/gmail/viewEmail`;
    }

    searchEmailPost() {
        return '/feature/gmail/searchEmail';
    }

    viewEmailDeleted() {
        return '/feature/gmail/viewEmailDeleted';
    }

    configGMail() {
        return '/feature/gmail/configGMail';
    }

    notifyEmail() {
        return '/feature/gmail/notifyEmail'
    }

    staticEmail() {
        return '/feature/gmail/staticEmail'
    }

    editContactEmail() {
        return '/feature/gmail/editContactEmail'
    }


    transferDriver() {
        return '/feature/driver/transferData'
    }

    BulkMigration() {
        return '/feature/driver/BulkMigration'
    }

    authentication() {
        return '/feature/other/authentication'
    }

    actionLog() {
        return '/feature/other/actionLog'
    }

    informationAccount() {
        return '/feature/other/infoAccount'
    }

    listAccount() {
        return '/feature/other/listAccount'
    }

    historyLogin() {
        return '/feature/other/historyLogin'
    }
}

export default new AppURL();
