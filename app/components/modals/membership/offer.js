import Component from '@glimmer/component';
import {inject as service} from '@ember/service';

export default class ModalsMembershipOfferComponent extends Component {
    @service config;
    @service settings;
}
