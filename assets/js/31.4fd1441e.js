(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{194:function(t,a,s){t.exports=s.p+"assets/img/2743275-72a9f7da67487398.d392fc83.png"},413:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"搭建-elasticsearch-6-1-3分布式集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-elasticsearch-6-1-3分布式集群","aria-hidden":"true"}},[t._v("#")]),t._v(" 搭建-ElasticSearch-6-1-3分布式集群")]),t._v(" "),e("blockquote",[e("p",[t._v("ELasticsearch 6.1.3要求JDK版本最低为"),e("code",[t._v("1.8")])])]),t._v(" "),e("p",[t._v("mac上的本机ip为192.168.1.111,设为"),e("code",[t._v("master")]),t._v("节点，配置如下：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster.name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("application\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network.host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.1.111\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.cors.enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.cors.allow-origin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.master")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery.zen.ping.unicast.hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.111"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("Ubuntu机器的ip位192.168.1.102，配置如下：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster.name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("application\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("102")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network.host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.1.102\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.cors.enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http.cors.allow-origin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.master")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node.data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery.zen.ping.unicast.hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.111"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("先启动mac上的master，再启动Ubuntu上的slave节点，观察输出，会有一个node-102探测到master节点的提示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("2017-06-07T11:33:39,369][INFO ][o.e.c.s.ClusterService   ] [node-102] detected_master {node-111}{3dQd1RRVTMiKdTckM68nPQ}{H6Zu7PAQRWewUBcllsQWTQ}{192.168.1.111}{192.168.1.111:9300}, added {{node-111}{3dQd1RRVTMiKdTckM68nPQ}{H6Zu7PAQRWewUBcllsQWTQ}{192.168.1.111}{192.168.1.111:9300},}, reason: zen-disco-receive(from master [master {node-111}{3dQd1RRVTMiKdTckM68nPQ}{H6Zu7PAQRWewUBcllsQWTQ}{192.168.1.111}{192.168.1.111:9300} committed version [8]])'\n")])])]),e("p",[t._v("访问"),e("code",[t._v("head")]),t._v("，一个master一个slave组成集群，界面如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(194),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"单机多节点集群配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单机多节点集群配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 单机多节点集群配置")]),t._v(" "),e("p",[t._v("如果想要在一台机器上启动多个节点，步骤如下：")]),t._v(" "),e("ul",[e("li",[t._v("1、复制一份ELasticsearch的安装包")]),t._v(" "),e("li",[t._v("2、修改端口，比如一个是9200，一个是9205")]),t._v(" "),e("li",[t._v("3、删除data目录下的数据(如果是新解压的安装包就不必了)")])])])},[],!1,null,null,null);a.default=n.exports}}]);