import Vue from 'vue'
import { Button } from 'element-ui'
import { Form }from 'element-ui'
import { Input }from 'element-ui'
import { Checkbox,CheckboxGroup}from 'element-ui'
import { Row}from 'element-ui'
import { Option}from 'element-ui'
import { Select}from 'element-ui'
import { Dropdown,DropdownItem,DropdownMenu}from 'element-ui'
import { Message}from 'element-ui'
import { Container}from 'element-ui'
import { Header}from 'element-ui'
import { Main}from 'element-ui'
import { Footer}from 'element-ui'
import { CollapseItem}from 'element-ui'
import { Collapse}from 'element-ui'

Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Form)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Row)
Vue.use(Option)
Vue.use(Select)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Message)
Vue.use(CheckboxGroup)


Vue.use(Button)
Vue.prototype.$message=Message
