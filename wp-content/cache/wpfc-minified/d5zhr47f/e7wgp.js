// source --> //localhost/gbzzz/wp-content/plugins/smart-slider-3/Public/SmartSlider3/Slider/SliderType/Simple/Assets/dist/ss-simple.min.js?ver=569f102c 
!function(i){var t=i;t._N2=t._N2||{_r:[],_d:[],r:function(){this._r.push(arguments)},d:function(){this._d.push(arguments)}};var s,h=i.document,n=(h.documentElement,i.setTimeout,i.clearTimeout,t._N2),a=(i.requestAnimationFrame,h.createElement.bind(h),Object.assign),r=function(i,t){return i.dispatchEvent(t)},o=function(i,t){return r(i,new Event(t,{bubbles:!1,cancelable:!1}))},c=function(i,t,s){i.addEventListener(t,s,{once:!0})};s=function(){h.body},"complete"===h.readyState||"interactive"===h.readyState?s():Document&&Document.prototype&&Document.prototype.addEventListener&&Document.prototype.addEventListener!==h.addEventListener?Document.prototype.addEventListener.call(h,"DOMContentLoaded",s):h.addEventListener("DOMContentLoaded",s),n.d("SmartSliderMainAnimationSimple",["SmartSliderMainAnimationAbstract"],(function(){function i(i,t){switch(this.postBackgroundAnimation=!1,this._currentBackgroundAnimation=!1,this.reverseSlideIndex=null,(t=a({delay:0,type:"horizontal",shiftedBackgroundAnimation:"auto"},t)).delay/=1e3,t.duration<300&&(t.type="no"),n.SmartSliderMainAnimationAbstract.prototype.constructor.call(this,i,t),this.parameters.type){case"no":this.animation=this._mainAnimationNo,this.isNoAnimation=!0;break;case"fade":this.animation=this._mainAnimationFade;break;case"crossfade":this.animation=this._mainAnimationCrossFade;break;case"vertical":i.backgrounds.hasFixed?this.animation=this._mainAnimationFade:this.animation=this._mainAnimationVertical;break;case"vertical-reversed":i.backgrounds.hasFixed?this.animation=this._mainAnimationFade:this.animation=this._mainAnimationVerticalReversed;break;case"horizontal-reversed":this.animation=this._mainAnimationHorizontalReversed;break;default:this.animation=this._mainAnimationHorizontal}}return i.prototype=Object.create(n.SmartSliderMainAnimationAbstract.prototype),i.prototype.constructor=i,i.prototype.changeTo=function(i,t,s,h){this.postBackgroundAnimation&&this.postBackgroundAnimation.prepareToSwitchSlide(i,t),n.SmartSliderMainAnimationAbstract.prototype.changeTo.apply(this,arguments)},i.prototype.setActiveSlide=function(i){for(var t=0;t<this.slider.slides.length;t++)this.slider.slides[t]!==i&&this.hideSlide(this.slider.slides[t])},i.prototype.hideSlide=function(i){n.MW.R(i.SMWs,{x:-1e5*n2const.rtl.modifier})},i.prototype.showSlide=function(i){n.MW.R(i.SMWs,{x:0,y:0})},i.prototype.cleanSlideIndex=function(i){this.hideSlide(this.slider.slides[i])},i.prototype.revertTo=function(i,t){n.MW.R(this.slider.slides[t].SMWs,{zIndex:""}),this.hideSlide(this.slider.slides[t]),n.SmartSliderMainAnimationAbstract.prototype.revertTo.apply(this,arguments)},i.prototype._initAnimation=function(i,t,s){this.animation(i,t,s)},i.prototype.onBackwardChangeToComplete=function(i,t,s){this.reverseSlideIndex=null,this.onChangeToComplete(i,t,s)},i.prototype.onChangeToComplete=function(i,t,s){null!==this.reverseSlideIndex&&(o(this.slider.slides[this.reverseSlideIndex].element,"mainAnimationStartInCancel"),this.reverseSlideIndex=null),this.hideSlide(i),n.SmartSliderMainAnimationAbstract.prototype.onChangeToComplete.apply(this,arguments)},i.prototype.onReverseChangeToComplete=function(i,t,s){this.hideSlide(i),n.SmartSliderMainAnimationAbstract.prototype.onReverseChangeToComplete.apply(this,arguments)},i.prototype._mainAnimationNo=function(i,t){this.showSlide(t),i.unsetActive(),t.setActive();var s=this.timeline.totalDuration(),h=this.getExtraDelay();this._currentBackgroundAnimation&&this.parameters.shiftedBackgroundAnimation&&this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup(),0===s&&(h+=.1);var a=[i.SMWs[0]];!this._currentBackgroundAnimation&&i.SMWs[1]&&a.push(i.SMWs[1]),this.timeline.set(a,{opacity:0},h);var r=[t.SMWs[0]];!this._currentBackgroundAnimation&&t.SMWs[1]&&r.push(t.SMWs[1]),this.timeline.set(r,{opacity:1},s),c(this.sliderElement,"mainAnimationComplete",function(e){var i=this.slider.slides[e.detail.previousSlideIndex],t=this.slider.slides[e.detail.currentSlideIndex];n.MW.R(i.SMWs,{opacity:1}),n.MW.R(t.SMWs,{opacity:1})}.bind(this)),this.slider.updateInsideSlides([i,t])},i.prototype._mainAnimationFade=function(i,t){n.MW.R(i.SMWs,{zIndex:23}),this.showSlide(t),i.unsetActive(),t.setActive();var s=this.adjustMainAnimation();if(0!==this.parameters.shiftedBackgroundAnimation){var h=!1,a=!1;if("auto"===this.parameters.shiftedBackgroundAnimation?i.hasLayers()?h=!0:a=!0:h=!0,this._currentBackgroundAnimation&&h){var r=s.outDuration-s.extraDelay;r>0&&this.timeline.shiftChildren(r),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else a&&(s.extraDelay>0&&this.timeline.shiftChildren(s.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}var o=[i.SMWs[0]];!this._currentBackgroundAnimation&&i.SMWs[1]&&o.push(i.SMWs[1]),this.timeline.fromTo(o,s.outDuration,{opacity:1},{opacity:0,ease:this.getEase()},s.outDelay);var u=n.MW.P(t.element);this.timeline.fromTo(u,s.inDuration,{opacity:0},{opacity:1,ease:this.getEase()},s.inDelay),!this._currentBackgroundAnimation&&t.background&&(n.MW.P(t.background.element).opacity=1),c(this.sliderElement,"mainAnimationComplete",function(e){var i=this.slider.slides[e.detail.previousSlideIndex];n.MW.R(i.SMWs,{zIndex:"",opacity:1})}.bind(this)),this.slider.updateInsideSlides([i,t])},i.prototype._mainAnimationCrossFade=function(i,t){n.MW.R(i.SMWs,{zIndex:23}),this.showSlide(t),i.unsetActive(),t.setActive();var s=this.adjustMainAnimation();if(0!=this.parameters.shiftedBackgroundAnimation){var h=!1,a=!1;if("auto"==this.parameters.shiftedBackgroundAnimation?i.hasLayers()?h=!0:a=!0:h=!0,this._currentBackgroundAnimation&&h){var r=s.outDuration-s.extraDelay;r>0&&this.timeline.shiftChildren(r),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else a&&(s.extraDelay>0&&this.timeline.shiftChildren(s.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}var o=[i.SMWs[0]];!this._currentBackgroundAnimation&&i.SMWs[1]&&o.push(i.SMWs[1]),this.timeline.fromTo(o,s.outDuration,{opacity:1},{opacity:0,ease:this.getEase()},s.outDelay);var u=[t.SMWs[0]];!this._currentBackgroundAnimation&&t.SMWs[1]&&u.push(t.SMWs[1]),this.timeline.fromTo(u,s.inDuration,{opacity:0},{opacity:1,ease:this.getEase()},s.inDelay),c(this.sliderElement,"mainAnimationComplete",function(e){var i=this.slider.slides[e.detail.previousSlideIndex],t=this.slider.slides[e.detail.currentSlideIndex];n.MW.R(i.SMWs,{zIndex:"",opacity:1}),n.MW.R(t.SMWs,{opacity:1})}.bind(this)),this.slider.updateInsideSlides([i,t])},i.prototype._mainAnimationHorizontal=function(i,t,s){this.__mainAnimationDirection(i,t,"horizontal",s)},i.prototype._mainAnimationVertical=function(i,t,s){this.showSlide(t),this.__mainAnimationDirection(i,t,"vertical",s)},i.prototype._mainAnimationHorizontalReversed=function(i,t,s){this.__mainAnimationDirection(i,t,"horizontal",!s)},i.prototype._mainAnimationVerticalReversed=function(i,t,s){this.showSlide(t),this.__mainAnimationDirection(i,t,"vertical",!s)},i.prototype.__mainAnimationDirection=function(i,t,s,h){var a=i.SMWs,r=t.SMWs,o=[i,t],u="",l=0;"horizontal"===s?(u="x",l=Math.floor(this.slider.responsive.resizeContext.slideOuterWidth),n2const.rtl.isRtl&&(h=!h)):"vertical"===s&&(u="y",l=Math.floor(this.slider.responsive.resizeContext.slideOuterHeight)),h&&(l*=-1);var f={},v={snap:"x,y",ease:this.getEase()},m={snap:"x,y",ease:this.getEase()};f[u]=l,m[u]=-l,n.MW.R(a,{zIndex:23});var d={zIndex:23};d[u]=l,n.MW.R(r,d),i.unsetActive(),t.setActive();var p,y=this.adjustMainAnimation();if(v[u]=0,this.timeline.fromTo(r,y.inDuration,f,v,y.inDelay),0!=this.parameters.shiftedBackgroundAnimation){var S=!1,x=!1;if("auto"===this.parameters.shiftedBackgroundAnimation?i.hasLayers()?S=!0:x=!0:S=!0,this._currentBackgroundAnimation&&S){var b=y.outDuration-y.extraDelay;b>0&&this.timeline.shiftChildren(b),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else x&&(y.extraDelay>0&&this.timeline.shiftChildren(y.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}if(this.timeline.to(a,y.outDuration,m,y.outDelay),this.isTouch&&this.isReverseAllowed)if(h?this.slider.blockCarousel&&this.slider.isChangeCarousel("next")||(p=i.getNext()):this.slider.blockCarousel&&this.slider.isChangeCarousel("previous")||(p=i.getPrevious()),p&&p!==t){this.reverseSlideIndex=p.index,this.enableReverseMode(),o.push(p),"vertical"===s&&this.showSlide(p);var D=p.SMWs,z={};z[u]=l,n.MW.R(D,z);var A={},I={snap:"x,y",ease:this.getEase()},w={},C={snap:"x,y",ease:this.getEase()};I[u]=0,A[u]=-l,C[u]=l,w[u]=0,p.K("mainAnimationStartIn",{mainAnimation:this,previousSlideIndex:i.index,currentSlideIndex:p.index,isSystem:!1}),this.reverseTimeline.paused(!0),this.reverseTimeline.eventCallback("onComplete",this.onBackwardChangeToComplete.bind(this),[i,p,!1]),this.reverseTimeline.fromTo(D,y.inDuration,A,I,y.inDelay),this.reverseTimeline.fromTo(a,y.inDuration,w,C,y.inDelay)}else this.reverseSlideIndex=null;c(this.sliderElement,"mainAnimationComplete",function(e){var i=this.slider.slides[e.detail.previousSlideIndex],t=this.slider.slides[e.detail.currentSlideIndex];n.MW.R(i.SMWs,{zIndex:""}),n.MW.R(t.SMWs,{zIndex:""})}.bind(this)),this.slider.updateInsideSlides(o)},i.prototype.getExtraDelay=function(){return 0},i.prototype.adjustMainAnimation=function(){var i=this.parameters.duration,t=this.parameters.delay,s=this.timeline.totalDuration(),h=this.getExtraDelay();if(s>0){var n=i+t;if(!(n>s))return{inDuration:i,outDuration:i,inDelay:s-i,outDelay:h,extraDelay:h};i=i*s/n,(t=t*s/n)<h&&(i-=h-t,t=h)}else t+=h;return{inDuration:i,outDuration:i,inDelay:t,outDelay:t,extraDelay:h}},i.prototype.hasBackgroundAnimation=function(){return!1},i})),n.d("SmartSliderResponsiveSimple",["SmartSliderResponsive"],(function(){function i(){this.round=1,n.SmartSliderResponsive.prototype.constructor.apply(this,arguments),this.ii=this.sliderElement.classList.contains("n2-ss-full-page--constrain-ratio"),this.mainAnimation=this.slider.mainAnimation}return i.prototype=Object.create(n.SmartSliderResponsive.prototype),i.prototype.constructor=i,i.prototype.init=function(){n.SmartSliderResponsive.prototype.init.call(this),this._cacheEl={slider:this.sliderElement.querySelector(".n2-ss-slider-wrapper-inside")||this.sliderElement,"n2-ss-slider-2":this.sliderElement.querySelector(".n2-ss-slider-2"),"n2-ss-slider-3":this.sliderElement.querySelector(".n2-ss-slider-3")},this._cacheEl["n2-ss-slider-3"].addEventListener("scroll",(function(e){e.currentTarget.scrollTop=0,e.currentTarget.scrollLeft=0}),{capture:!0})},i.prototype.calculateResponsiveValues=function(){var i=this.slider.visibleRealSlides[0].element,t=i.getBoundingClientRect();this.resizeContext.slideSelfWidth=t.width,this.resizeContext.slideSelfHeight=t.height;var s=i.querySelector(".n2-ss-layers-container").getBoundingClientRect();this.resizeContext.slideWidth=s.width,this.resizeContext.slideHeight=s.height;var h=this._cacheEl.slider.getBoundingClientRect();this.resizeContext.sliderWidth=h.width,this.resizeContext.sliderHeight=h.height;var a=this._cacheEl["n2-ss-slider-3"].getBoundingClientRect();if(this.resizeContext.slideOuterWidth=a.width,this.resizeContext.slideOuterHeight=a.height,n.SmartSliderResponsive.prototype.calculateResponsiveValues.call(this),this.ii){var r=(this.resizeContext.sliderWidth-this.resizeContext.slideWidth)/-2+"px",o=(this.resizeContext.sliderHeight-this.resizeContext.slideHeight)/-2+"px";n.MW.P(this._cacheEl.slider)["--ss-clip-path"]="inset("+o+" "+r+" "+o+" "+r+")"}},i.prototype.onStarterSlide=function(i){this.slider.slides.forEach((function(i){i.SMWs=[n.MW.P(i.element,{x:"-10000px"})],i.background&&i.SMWs.push(n.MW.P(i.background.element,{x:"-10000px"}))})),n.SmartSliderResponsive.prototype.onStarterSlide.apply(this,arguments),this.mainAnimation.setActiveSlide(this.slider.currentSlide)},i})),n.d("SmartSliderSimple",["SmartSliderAbstract"],(function(){function i(i,t){this.type="simple",n.SmartSliderAbstract.prototype.constructor.call(this,i,a({bgAnimations:0,carousel:1},t))}return i.prototype=Object.create(n.SmartSliderAbstract.prototype),i.prototype.constructor=i,i.prototype.initResponsiveMode=function(){this.responsive=new n.SmartSliderResponsiveSimple(this,this.parameters.responsive),this.responsive.start(),n.SmartSliderAbstract.prototype.initResponsiveMode.call(this)},i.prototype.initMainAnimation=function(){!this.disabled.backgroundAnimations&&this.parameters.bgAnimations?this.mainAnimation=new n.SmartSliderFrontendBackgroundAnimation(this,this.parameters.mainanimation,this.parameters.bgAnimations):this.mainAnimation=new n.SmartSliderMainAnimationSimple(this,this.parameters.mainanimation)},i.prototype.afterRawSlidesReady=function(){if(this.parameters.postBackgroundAnimations&&this.parameters.postBackgroundAnimations.slides){for(var i=0;i<this.slides.length;i++)this.slides[i].postBackgroundAnimation=this.parameters.postBackgroundAnimations.slides[i];delete this.parameters.postBackgroundAnimations.slides}if(this.parameters.bgAnimations&&this.parameters.bgAnimations.slides){for(var t=0;t<this.slides.length;t++)this.slides[t].backgroundAnimation=this.parameters.bgAnimations.slides[t];delete this.parameters.bgAnimations.slides}},i.prototype.forceSetActiveSlide=function(i){i.setActive(),this.mainAnimation.showSlide(i)},i.prototype.forceUnsetActiveSlide=function(i){i.unsetActive(),this.mainAnimation.hideSlide(i)},i.prototype.getAnimationAxis=function(){switch(this.mainAnimation.parameters.type){case"vertical":case"vertical-reversed":return"vertical"}return"horizontal"},i})),n.d("ss-simple",["SmartSliderSimple","SmartSliderResponsiveSimple","SmartSliderMainAnimationSimple"])}(window);