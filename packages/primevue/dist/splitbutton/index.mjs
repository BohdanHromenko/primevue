import { isEmpty } from '@primeuix/utils/object';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import Button from 'primevue/button';
import TieredMenu from 'primevue/tieredmenu';
import BaseComponent from '@primevue/core/basecomponent';
import SplitButtonStyle from 'primevue/splitbutton/style';
import { resolveComponent, createElementBlock, openBlock, mergeProps, createVNode, createSlots, withCtx, renderSlot, normalizeClass, createElementVNode, createBlock, resolveDynamicComponent } from 'vue';

var script$1 = {
  name: 'BaseSplitButton',
  "extends": BaseComponent,
  props: {
    label: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    model: {
      type: Array,
      "default": null
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    appendTo: {
      type: [String, Object],
      "default": 'body'
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    fluid: {
      type: Boolean,
      "default": null
    },
    "class": {
      type: null,
      "default": null
    },
    style: {
      type: null,
      "default": null
    },
    buttonProps: {
      type: null,
      "default": null
    },
    menuButtonProps: {
      type: null,
      "default": null
    },
    menuButtonIcon: {
      type: String,
      "default": undefined
    },
    dropdownIcon: {
      type: String,
      "default": undefined
    },
    severity: {
      type: String,
      "default": null
    },
    raised: {
      type: Boolean,
      "default": false
    },
    rounded: {
      type: Boolean,
      "default": false
    },
    text: {
      type: Boolean,
      "default": false
    },
    outlined: {
      type: Boolean,
      "default": false
    },
    size: {
      type: String,
      "default": null
    },
    plain: {
      type: Boolean,
      "default": false
    }
  },
  style: SplitButtonStyle,
  provide: function provide() {
    return {
      $pcSplitButton: this,
      $parentInstance: this
    };
  }
};

var script = {
  name: 'SplitButton',
  "extends": script$1,
  inheritAttrs: false,
  emits: ['click'],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  data: function data() {
    return {
      isExpanded: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$watch('$refs.menu.visible', function (newValue) {
      _this.isExpanded = newValue;
    });
  },
  methods: {
    onDropdownButtonClick: function onDropdownButtonClick(event) {
      if (event) {
        event.preventDefault();
      }
      this.$refs.menu.toggle({
        currentTarget: this.$el,
        relatedTarget: this.$refs.button.$el
      });
      this.isExpanded = this.$refs.menu.visible;
    },
    onDropdownKeydown: function onDropdownKeydown(event) {
      if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
        this.onDropdownButtonClick();
        event.preventDefault();
      }
    },
    onDefaultButtonClick: function onDefaultButtonClick(event) {
      if (this.isExpanded) {
        this.$refs.menu.hide(event);
      }
      this.$emit('click', event);
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this.cx('root'), this["class"]];
    },
    hasFluid: function hasFluid() {
      return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  },
  components: {
    PVSButton: Button,
    PVSMenu: TieredMenu,
    ChevronDownIcon: ChevronDownIcon
  }
};

var _hoisted_1 = ["data-p-severity"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PVSButton = resolveComponent("PVSButton");
  var _component_PVSMenu = resolveComponent("PVSMenu");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": $options.containerClass,
    style: _ctx.style
  }, _ctx.ptmi('root'), {
    "data-p-severity": _ctx.severity
  }), [createVNode(_component_PVSButton, mergeProps({
    type: "button",
    "class": _ctx.cx('pcButton'),
    label: _ctx.label,
    disabled: _ctx.disabled,
    severity: _ctx.severity,
    text: _ctx.text,
    icon: _ctx.icon,
    outlined: _ctx.outlined,
    size: _ctx.size,
    fluid: _ctx.fluid,
    "aria-label": _ctx.label,
    onClick: $options.onDefaultButtonClick
  }, _ctx.buttonProps, {
    pt: _ctx.ptm('pcButton'),
    unstyled: _ctx.unstyled
  }), createSlots({
    "default": withCtx(function () {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 2
  }, [_ctx.$slots.icon ? {
    name: "icon",
    fn: withCtx(function (slotProps) {
      return [renderSlot(_ctx.$slots, "icon", {
        "class": normalizeClass(slotProps["class"])
      }, function () {
        return [createElementVNode("span", mergeProps({
          "class": [_ctx.icon, slotProps["class"]]
        }, _ctx.ptm('pcButton')['icon'], {
          "data-pc-section": "buttonicon"
        }), null, 16)];
      })];
    }),
    key: "0"
  } : undefined]), 1040, ["class", "label", "disabled", "severity", "text", "icon", "outlined", "size", "fluid", "aria-label", "onClick", "pt", "unstyled"]), createVNode(_component_PVSButton, mergeProps({
    ref: "button",
    type: "button",
    "class": _ctx.cx('pcDropdown'),
    disabled: _ctx.disabled,
    "aria-haspopup": "true",
    "aria-expanded": $data.isExpanded,
    "aria-controls": _ctx.$id + '_overlay',
    onClick: $options.onDropdownButtonClick,
    onKeydown: $options.onDropdownKeydown,
    severity: _ctx.severity,
    text: _ctx.text,
    outlined: _ctx.outlined,
    size: _ctx.size,
    unstyled: _ctx.unstyled
  }, _ctx.menuButtonProps, {
    pt: _ctx.ptm('pcDropdown')
  }), {
    icon: withCtx(function (slotProps) {
      return [renderSlot(_ctx.$slots, _ctx.$slots.dropdownicon ? 'dropdownicon' : 'menubuttonicon', {
        "class": normalizeClass(slotProps["class"])
      }, function () {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.menuButtonIcon || _ctx.dropdownIcon ? 'span' : 'ChevronDownIcon'), mergeProps({
          "class": [_ctx.dropdownIcon || _ctx.menuButtonIcon, slotProps["class"]]
        }, _ctx.ptm('pcDropdown')['icon'], {
          "data-pc-section": "menubuttonicon"
        }), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "aria-expanded", "aria-controls", "onClick", "onKeydown", "severity", "text", "outlined", "size", "unstyled", "pt"]), createVNode(_component_PVSMenu, {
    ref: "menu",
    id: _ctx.$id + '_overlay',
    model: _ctx.model,
    popup: true,
    autoZIndex: _ctx.autoZIndex,
    baseZIndex: _ctx.baseZIndex,
    appendTo: _ctx.appendTo,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm('pcMenu')
  }, createSlots({
    _: 2
  }, [_ctx.$slots.menuitemicon ? {
    name: "itemicon",
    fn: withCtx(function (slotProps) {
      return [renderSlot(_ctx.$slots, "menuitemicon", {
        item: slotProps.item,
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "0"
  } : undefined, _ctx.$slots.item ? {
    name: "item",
    fn: withCtx(function (slotProps) {
      return [renderSlot(_ctx.$slots, "item", {
        item: slotProps.item,
        hasSubmenu: slotProps.hasSubmenu,
        label: slotProps.label,
        props: slotProps.props
      })];
    }),
    key: "1"
  } : undefined]), 1032, ["id", "model", "autoZIndex", "baseZIndex", "appendTo", "unstyled", "pt"])], 16, _hoisted_1);
}

script.render = render;

export { script as default };
//# sourceMappingURL=index.mjs.map
