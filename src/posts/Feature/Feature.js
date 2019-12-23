import React, {Component} from 'react';
import style from './Feature.module.scss';
import {Route, Switch} from 'react-router-dom'
import AppURL from "../../components/Route/AppURL";
import StartGsuitePost from "./FeaturePost/StartGsuitePost";
import ViewEmailPost from "./FeaturePost/Gmail/ViewEmailPost";
import SidebarFeature from "../../components/SidebarFeature/SidebarFeature";
import SearchEmailPost from "./FeaturePost/Gmail/SearchEmailPost";
import ViewEmailDeleted from "./FeaturePost/Gmail/ViewEmailDeleted";
import ConfigEmail from "./FeaturePost/Gmail/ConfigEmail";
import NotifyEmail from "./FeaturePost/Gmail/NotifyEmail";
import EditContactEmail from "./FeaturePost/Gmail/EditContactEmail";
import TransferData from "./FeaturePost/Driver/TransferData";
import BulkMigration from "./FeaturePost/Driver/BulkMigration";
import ActionsLog from "./FeaturePost/Other/ActionsLog";
import StaticEmail from "./FeaturePost/Gmail/StaticEmail";
import Authentication from "./FeaturePost/Other/Authentication";
import InformationAccount from "./FeaturePost/Other/InformationAccount";
import ListAccount from "./FeaturePost/Other/ListAccount";
import HistoryLogin from "./FeaturePost/Other/HistoryLogin";

class Feature extends Component {
    componentDidMount(): void {
        document.getElementById('bg-custom').style.backgroundColor = '#343a40'
    }

    render() {
        return (
            <div className={style.feature}>
                <div className='container mx-auto pt-5'>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                            <SidebarFeature/>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                            <div className="main">
                                <Switch>
                                    {FeatureRoutes.map((route, index) => (
                                        <Route key={index} exact={route.exact} path={route.path}
                                               component={route.component}/>
                                    ))}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const FeatureRoutes = [
    {
        path: AppURL.feature(),
        component: StartGsuitePost,
        exact: true,
    }, {
        path: AppURL.viewEmailPost(),
        component: ViewEmailPost,
    }, {
        path: AppURL.searchEmailPost(),
        component: SearchEmailPost,
    }, {
        path: AppURL.viewEmailDeleted(),
        component: ViewEmailDeleted,
    }, {
        path: AppURL.configGMail(),
        component: ConfigEmail,
    }, {
        path: AppURL.notifyEmail(),
        component: NotifyEmail,
    }, {
        path: AppURL.staticEmail(),
        component: StaticEmail,
    }, {
        path: AppURL.editContactEmail(),
        component: EditContactEmail,
    }, {
        path: AppURL.transferDriver(),
        component: TransferData,
    }, {
        path: AppURL.BulkMigration(),
        component: BulkMigration,
    }, {
        path: AppURL.authentication(),
        component: Authentication,
    }, {
        path: AppURL.actionLog(),
        component: ActionsLog,
    }, {
        path: AppURL.informationAccount(),
        component: InformationAccount,
    }, {
        path: AppURL.listAccount(),
        component: ListAccount,
    }, {
        path: AppURL.historyLogin(),
        component: HistoryLogin,
    }
];

export default Feature;
