/* @ds-bundle: {"format":3,"namespace":"GlobalLinkerDesignSystem_9deb5f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Rating","sourcePath":"components/data/Rating.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"PlanCard","sourcePath":"components/surfaces/PlanCard.jsx"},{"name":"Testimonial","sourcePath":"components/surfaces/Testimonial.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"93f8e25bc6a1","components/core/Button.jsx":"f407b8f4f23b","components/core/Pill.jsx":"807ad736f31d","components/data/Avatar.jsx":"4a9e1e6c1d89","components/data/Rating.jsx":"6983bd1554aa","components/data/Stat.jsx":"b0f89a658529","components/forms/Input.jsx":"8f4bcdeba817","components/forms/SearchBar.jsx":"8e766b8cdc79","components/surfaces/Card.jsx":"05885bcb860a","components/surfaces/FeatureCard.jsx":"970c8c30476c","components/surfaces/PlanCard.jsx":"615346f7f612","components/surfaces/Testimonial.jsx":"954a17c325b5","ui_kits/landing-page/ComparisonMatrix.jsx":"3f81c0655fa7","ui_kits/landing-page/Footer.jsx":"64ecb5037c05","ui_kits/landing-page/Header.jsx":"9fffdf427e32","ui_kits/landing-page/Icons.jsx":"0ceb608d57f3","ui_kits/landing-page/NavyDoneForMe.jsx":"7c866aaaa5bf","ui_kits/landing-page/PlanSelector.jsx":"c1ce6bb79532","ui_kits/landing-page/SearchCTA.jsx":"21f198bd545b","ui_kits/landing-page/SellerHero.jsx":"31cbfbfa3cb4","ui_kits/landing-page/SolutionGrid.jsx":"caff34b3dec4","ui_kits/landing-page/TestimonialRibbon.jsx":"0295406bc94d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GlobalLinkerDesignSystem_9deb5f = window.GlobalLinkerDesignSystem_9deb5f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Compact status / category badge. Orange = highlight ("Most Popular", "New"),
 * blue = informational, neutral = quiet meta, success = positive.
 */
function Badge({
  children,
  tone = 'orange',
  solid = true,
  size = 'md',
  style = {},
  ...rest
}) {
  const tones = {
    orange: {
      solid: {
        bg: 'var(--gl-orange)',
        fg: '#fff'
      },
      soft: {
        bg: 'var(--gl-orange-50)',
        fg: 'var(--gl-orange-700)'
      }
    },
    blue: {
      solid: {
        bg: 'var(--gl-blue)',
        fg: '#fff'
      },
      soft: {
        bg: 'var(--gl-blue-50)',
        fg: 'var(--gl-blue-700)'
      }
    },
    neutral: {
      solid: {
        bg: 'var(--gl-slate-700)',
        fg: '#fff'
      },
      soft: {
        bg: 'var(--gl-slate-100)',
        fg: 'var(--gl-slate-600)'
      }
    },
    success: {
      solid: {
        bg: 'var(--gl-success)',
        fg: '#fff'
      },
      soft: {
        bg: 'var(--gl-success-50)',
        fg: 'var(--gl-success)'
      }
    }
  };
  const t = (tones[tone] || tones.orange)[solid ? 'solid' : 'soft'];
  const sizes = {
    sm: {
      fs: 11,
      pad: '3px 8px'
    },
    md: {
      fs: 12,
      pad: '4px 10px'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: s.fs,
      lineHeight: 1,
      padding: s.pad,
      borderRadius: 'var(--radius-pill)',
      letterSpacing: '0.01em',
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlobalLinker Button.
 * Primary = solid orange CTA. Secondary = blue outline. Tertiary = solid blue.
 * Ghost = text-only. Subtle = light blue fill.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 13,
      height: 36,
      radius: 8,
      gap: 6
    },
    md: {
      padding: '11px 20px',
      fontSize: 15,
      height: 44,
      radius: 10,
      gap: 8
    },
    lg: {
      padding: '14px 26px',
      fontSize: 16,
      height: 52,
      radius: 12,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--gl-orange)',
      color: '#fff',
      border: '1px solid var(--gl-orange)',
      boxShadow: 'var(--shadow-cta)'
    },
    secondary: {
      background: '#fff',
      color: 'var(--gl-blue)',
      border: '1px solid var(--gl-blue)'
    },
    tertiary: {
      background: 'var(--gl-blue)',
      color: '#fff',
      border: '1px solid var(--gl-blue)'
    },
    subtle: {
      background: 'var(--gl-blue-50)',
      color: 'var(--gl-blue)',
      border: '1px solid transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--gl-blue)',
      border: '1px solid transparent'
    },
    'on-dark': {
      background: '#fff',
      color: 'var(--gl-navy-800)',
      border: '1px solid #fff'
    }
  };
  const v = variants[variant] || variants.primary;
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    minHeight: s.height,
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
    whiteSpace: 'nowrap',
    ...v,
    ...style
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.filter = 'brightness(0.94)';
  };
  const onLeave = e => {
    e.currentTarget.style.filter = 'none';
    e.currentTarget.style.transform = 'none';
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'none';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow pill — the small rounded chip that sits above section headings
 * (e.g. "Seller Discovery Tools", "The Problem"). Light tinted fill, optional icon.
 */
function Pill({
  children,
  icon = null,
  tone = 'blue',
  style = {},
  ...rest
}) {
  const tones = {
    blue: {
      bg: 'var(--gl-blue-50)',
      fg: 'var(--gl-blue)'
    },
    orange: {
      bg: 'var(--gl-orange-50)',
      fg: 'var(--gl-orange-700)'
    },
    success: {
      bg: 'var(--gl-success-50)',
      fg: 'var(--gl-success)'
    },
    onDark: {
      bg: 'rgba(255,255,255,0.10)',
      fg: '#fff'
    }
  };
  const t = tones[tone] || tones.blue;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular image, or initials fallback on a tinted background.
 */
function Avatar({
  src = null,
  name = '',
  size = 40,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const common = {
    width: size,
    height: size,
    borderRadius: '50%',
    flexShrink: 0,
    border: ring ? '2px solid #fff' : 'none',
    boxShadow: ring ? 'var(--shadow-sm)' : 'none',
    fontFamily: 'var(--font-sans)',
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: name,
      style: {
        ...common,
        objectFit: 'cover'
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...common,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--gl-blue-50)',
      color: 'var(--gl-blue)',
      fontWeight: 700,
      fontSize: size * 0.4
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Star rating row. Gold filled stars out of `max`, optional trailing count.
 */
function Rating({
  value = 5,
  max = 5,
  size = 16,
  showValue = false,
  count = null,
  style = {},
  ...rest
}) {
  const stars = [];
  for (let i = 0; i < max; i++) {
    const fill = i < Math.round(value);
    stars.push(/*#__PURE__*/React.createElement("svg", {
      key: i,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: fill ? 'var(--gl-star)' : 'none',
      stroke: fill ? 'var(--gl-star)' : 'var(--gl-slate-300)',
      strokeWidth: "1.5",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2l2.9 6.3 6.8.7-5.1 4.6 1.5 6.7L12 17.8 6 20.6l1.5-6.7L2.4 9.3l6.8-.7z"
    })));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 1
    }
  }, stars), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, value.toFixed(1)), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Rating.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Headline statistic — large value over a small label.
 * Used in hero trust rows ("50,000+ Indian SMEs") and dashboards.
 */
function Stat({
  value,
  label,
  tone = 'blue',
  align = 'center',
  size = 'md',
  style = {},
  ...rest
}) {
  const colors = {
    blue: 'var(--gl-blue)',
    orange: 'var(--gl-orange)',
    navy: 'var(--gl-navy-800)',
    white: '#fff'
  };
  const sizes = {
    sm: 22,
    md: 30,
    lg: 40
  };
  const c = colors[tone] || colors.blue;
  const labelColor = tone === 'white' ? 'rgba(255,255,255,0.75)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: sizes[size] || sizes.md,
      fontWeight: 800,
      color: c,
      lineHeight: 1.05,
      letterSpacing: '-0.02em'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: labelColor
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional leading icon and label.
 */
function Input({
  label = null,
  icon = null,
  error = null,
  hint = null,
  size = 'md',
  style = {},
  containerStyle = {},
  id,
  ...rest
}) {
  const sizes = {
    md: {
      h: 44,
      fs: 15,
      pad: 14
    },
    lg: {
      h: 52,
      fs: 16,
      pad: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--gl-danger)' : focus ? 'var(--gl-blue)' : 'var(--border-card)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.pad}px`,
      background: '#fff',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: s.fs,
      color: 'var(--text-strong)',
      minWidth: 0,
      ...style
    }
  }, rest))), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--gl-danger)'
    }
  }, error), hint && !error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Procurement search hero bar — large rounded input with an inline orange
 * search button (Pattern B). Submits on Enter or button click.
 */
function SearchBar({
  placeholder = 'Search products, suppliers, categories…',
  buttonLabel = 'Search',
  onSearch,
  defaultValue = '',
  style = {},
  ...rest
}) {
  const [value, setValue] = React.useState(defaultValue);
  const submit = () => onSearch && onSearch(value);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: '#fff',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-pill)',
      padding: 6,
      paddingLeft: 18,
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: e => setValue(e.target.value),
    onKeyDown: e => e.key === 'Enter' && submit(),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 15,
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    onClick: submit,
    style: {
      borderRadius: 999
    }
  }, buttonLabel));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Base surface — white card with an ultra-thin border.
 * `interactive` adds a subtle lift + blue-tinted shadow on hover.
 */
function Card({
  children,
  padding = 20,
  radius = 'var(--radius-lg)',
  interactive = false,
  tone = 'light',
  style = {},
  ...rest
}) {
  const tones = {
    light: {
      background: '#fff',
      border: '1px solid var(--border-card)',
      color: 'var(--text-strong)'
    },
    tint: {
      background: 'var(--gl-slate-50)',
      border: '1px solid var(--border-card)',
      color: 'var(--text-strong)'
    },
    dark: {
      background: 'var(--gl-navy-800)',
      border: '1px solid var(--border-on-dark)',
      color: '#fff'
    }
  };
  const t = tones[tone] || tones.light;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      ...t,
      padding,
      borderRadius: radius,
      fontFamily: 'var(--font-sans)',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Benefit / directory card (Pattern C): tinted icon chip top-left, optional
 * orange tag label, title and compact copy.
 */
function FeatureCard({
  icon = null,
  tag = null,
  title,
  children,
  iconTone = 'blue',
  interactive = true,
  style = {},
  ...rest
}) {
  const tones = {
    blue: {
      bg: 'var(--gl-blue-50)',
      fg: 'var(--gl-blue)'
    },
    orange: {
      bg: 'var(--gl-orange-50)',
      fg: 'var(--gl-orange)'
    }
  };
  const it = tones[iconTone] || tones.blue;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: interactive,
    padding: 20,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: it.bg,
      color: it.fg
    }
  }, icon), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--gl-orange-700)',
      background: 'var(--gl-orange-50)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-pill)'
    }
  }, tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text-strong)',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PlanCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pricing / tier card (Pattern E). The `featured` tier is elevated with an
 * orange border, "Most Popular" badge and orange CTA to direct focus.
 */
function PlanCard({
  name,
  price,
  period = '',
  priceNote = '',
  description = '',
  features = [],
  ctaLabel = 'Get Started',
  onCta,
  featured = false,
  badgeLabel = 'Most Popular',
  style = {},
  ...rest
}) {
  const Check = ({
    on = true
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: on ? 'var(--gl-success)' : 'var(--gl-slate-300)',
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      marginTop: 2
    }
  }, on ? /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: '#fff',
      padding: 22,
      borderRadius: 'var(--radius-lg)',
      border: featured ? '2px solid var(--gl-orange)' : '1px solid var(--border-card)',
      boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), featured && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -12,
      left: 22
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "orange"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.3 6.8.7-5.1 4.6 1.5 6.7L12 17.8 6 20.6l1.5-6.7L2.4 9.3l6.8-.7z"
  })), badgeLabel)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      color: featured ? 'var(--gl-orange)' : 'var(--text-strong)',
      letterSpacing: '-0.02em'
    }
  }, price), period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, period)), priceNote && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: -10
    }
  }, priceNote), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, features.map((f, i) => {
    const item = typeof f === 'string' ? {
      label: f,
      on: true
    } : f;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 8,
        fontSize: 13.5,
        lineHeight: 1.45,
        color: item.on ? 'var(--text-body)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Check, {
      on: item.on
    }), /*#__PURE__*/React.createElement("span", null, item.label));
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'primary' : 'secondary',
    fullWidth: true,
    onClick: onCta
  }, ctaLabel));
}
Object.assign(__ds_scope, { PlanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PlanCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial card (Pattern F): gold rating, short italic quote, avatar +
 * name / company. Optional trust seal/logo at top.
 */
function Testimonial({
  quote,
  name,
  role = '',
  company = '',
  avatar = null,
  seal = null,
  rating = 5,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      background: '#fff',
      padding: 22,
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-card)',
      boxShadow: 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), seal && /*#__PURE__*/React.createElement("img", {
    src: seal,
    alt: company,
    style: {
      height: 36,
      width: 'auto',
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    size: 15
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      fontStyle: 'italic',
      color: 'var(--text-body)'
    }
  }, "\"", quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatar,
    name: name,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, [role, company].filter(Boolean).join(', ')))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/ComparisonMatrix.jsx
try { (() => {
/* ComparisonMatrix — Pattern D: long-form feature comparison table with
   zebra-striped light-blue rows, section header rows, check/cross states.
   window.GLComparisonMatrix */
(function () {
  const {
    Badge
  } = window.GlobalLinkerDesignSystem_9deb5f;
  const Icon = window.GLIcon;
  const SECTIONS = [{
    head: 'Product Catalogue',
    rows: [['Add Products', '50', 'Unlimited'], ['Bulk Upload / XLS', false, true], ['AI Product Descriptions', false, true]]
  }, {
    head: 'Visibility Channels',
    rows: [['GlobalLinker Marketplace', true, true], ['Indian Business Portal (FIEO)', false, true], ['ONDC Access', false, true]]
  }, {
    head: 'Marketplace Performance',
    rows: [['RFQ Responses', '5/month', 'Unlimited'], ['Verified RFQs', '5/month', 'Unlimited'], ['Priority Marketplace Visibility', 'Standard', 'Priority']]
  }, {
    head: 'Website — Sales & Conversion',
    rows: [['Inquiry-Now Product Pages', false, true], ['Cart-to-Quote', false, true], ['Abandoned Cart Recovery', false, true], ['Multi-Currency Switcher', false, true]]
  }];
  function Cell({
    v
  }) {
    if (v === true) return /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gl-success)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Check",
      size: 18
    }));
    if (v === false) return /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gl-slate-300)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "X",
      size: 17
    }));
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, v);
  }
  function GLComparisonMatrix() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: '#fff',
        padding: '48px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 880,
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '0 0 8px',
        fontSize: 30,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)'
      }
    }, "See Everything Included in ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gl-orange)'
      }
    }, "Premium plus")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-body)'
      }
    }, "Explore attributes and capabilities \u2014 clearly structured for easy comparison.")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 880,
        margin: '0 auto',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        background: 'var(--gl-navy-800)'
      }
    }, /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: 'left',
        padding: '13px 20px',
        fontSize: 13,
        fontWeight: 700,
        color: '#fff'
      }
    }, "Feature"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: 'center',
        padding: '13px 16px',
        width: 130
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm"
    }, "Blue")), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: 'center',
        padding: '13px 16px',
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "orange",
      size: "sm"
    }, "Premium plus")))), /*#__PURE__*/React.createElement("tbody", null, SECTIONS.map((sec, si) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: si
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: 3,
      style: {
        background: 'var(--gl-blue-50)',
        padding: '8px 20px',
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--gl-blue-700)'
      }
    }, sec.head)), sec.rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
      key: ri,
      style: {
        background: ri % 2 ? 'var(--gl-slate-50)' : '#fff',
        borderTop: '1px solid var(--border-card)'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '11px 20px',
        fontSize: 13.5,
        color: 'var(--text-body)'
      }
    }, r[0]), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '11px 16px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Cell, {
      v: r[1]
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '11px 16px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Cell, {
      v: r[2]
    }))))))))));
  }
  window.GLComparisonMatrix = GLComparisonMatrix;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/ComparisonMatrix.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Footer.jsx
try { (() => {
/* Footer — navy footer with white logo, link columns and legal row.
   window.GLFooter */
(function () {
  const Icon = window.GLIcon;
  const COLS = [{
    title: 'Product',
    links: ['Features', 'Pricing', 'Done-For-Me', 'Success Stories']
  }, {
    title: 'Resources',
    links: ['Upcoming Events', 'Blog', 'Seller Academy', 'Help Center']
  }, {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Contact Us', 'Careers']
  }, {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  }];
  function FLink({
    children
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        fontSize: 13,
        textDecoration: 'none',
        color: h ? '#fff' : 'var(--gl-slate-400)',
        transition: 'color .15s'
      }
    }, children);
  }
  function GLFooter() {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--gl-navy)',
        padding: '48px 32px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.4fr repeat(4, 1fr)',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        maxWidth: 240
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/globallinker-logo-reverse.svg",
      alt: "GlobalLinker",
      style: {
        height: 22,
        alignSelf: 'flex-start'
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        lineHeight: 1.55,
        color: 'var(--gl-slate-400)'
      }
    }, "Helping Indian SMEs become discoverable, trade-ready and digitally present for global B2B sourcing."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        color: 'var(--gl-slate-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Linkedin",
      size: 18
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "Twitter",
      size: 18
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "Facebook",
      size: 18
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "Youtube",
      size: 18
    }))), COLS.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.title,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 2px',
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: '#fff'
      }
    }, c.title), c.links.map(l => /*#__PURE__*/React.createElement(FLink, {
      key: l
    }, l))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '28px auto 0',
        paddingTop: 18,
        borderTop: '1px solid rgba(255,255,255,0.10)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--gl-slate-500)'
      }
    }, "\xA9 2026 GlobalLinker. All rights reserved."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--gl-slate-500)'
      }
    }, "Proud partners of FIEO \xB7 ONDC \xB7 Indian Business Portal (IBP)")));
  }
  window.GLFooter = GLFooter;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Header.jsx
try { (() => {
/* Header — white top nav with logo, links and actions. window.GLHeader */
(function () {
  const {
    Button
  } = window.GlobalLinkerDesignSystem_9deb5f;
  const Icon = window.GLIcon;
  function NavLink({
    children
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none',
        color: h ? 'var(--gl-blue)' : 'var(--gl-slate-600)',
        transition: 'color .15s'
      }
    }, children);
  }
  function GLHeader() {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 32px',
        background: '#fff',
        borderBottom: '1px solid var(--border-card)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/globallinker-logo.svg",
      alt: "GlobalLinker",
      style: {
        height: 22
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 20,
        background: 'var(--border-card)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-muted)'
      }
    }, "Seller Panel")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(NavLink, null, "Features"), /*#__PURE__*/React.createElement(NavLink, null, "Pricing"), /*#__PURE__*/React.createElement(NavLink, null, "Done-For-Me"), /*#__PURE__*/React.createElement(NavLink, null, "Success Stories")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(NavLink, null, "Log In"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "ArrowRight",
        size: 15
      })
    }, "Get Started")));
  }
  window.GLHeader = GLHeader;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Icons.jsx
try { (() => {
/* GlobalLinker UI kit — Lucide icon wrapper (line icons, ~2px stroke).
   Reads icon node data from the Lucide UMD global and renders an SVG.
   Exposes window.GLIcon. */
(function () {
  function Icon({
    name,
    size = 20,
    stroke = 2,
    color = 'currentColor',
    style = {},
    ...rest
  }) {
    const lib = window.lucide;
    let node = lib && lib.icons ? lib.icons[name] : lib ? lib[name] : null;
    if (!node) return null;
    // Resolve to the array of [tag, attrs] child nodes across lucide shapes.
    let childNodes = null;
    if (Array.isArray(node) && typeof node[0] === 'string' && Array.isArray(node[2])) {
      childNodes = node[2]; // lucide UMD: ["svg", {attrs}, [[tag,attrs], ...]]
    } else if (node && Array.isArray(node.iconNode)) {
      childNodes = node.iconNode; // { iconNode: [[tag,attrs], ...] }
    } else if (Array.isArray(node)) {
      childNodes = node; // already [[tag,attrs], ...]
    }
    if (!childNodes) return null;
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth: stroke,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        display: 'block',
        flexShrink: 0,
        ...style
      },
      ...rest
    }, childNodes.map(function (child, i) {
      const tag = child[0];
      const attrs = child[1] || {};
      return React.createElement(tag, Object.assign({
        key: i
      }, attrs));
    }));
  }
  window.GLIcon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/NavyDoneForMe.jsx
try { (() => {
/* NavyDoneForMe — Pattern A: deep-navy hero, mixed white/orange headline,
   value checklist + price/CTA, a product-browser panel mock on the right,
   and a row of horizontal white value cards below. window.GLNavyDoneForMe */
(function () {
  const {
    Button,
    Pill,
    Card
  } = window.GlobalLinkerDesignSystem_9deb5f;
  const Icon = window.GLIcon;
  function Check({
    children
  }) {
    return /*#__PURE__*/React.createElement("li", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        fontSize: 14,
        lineHeight: 1.45,
        color: 'var(--gl-slate-300)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gl-orange)',
        display: 'inline-flex',
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "CircleCheck",
      size: 17
    })), /*#__PURE__*/React.createElement("span", null, children));
  }
  function BrowserPanel() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 14,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: '#ff5f57'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: '#febc2e'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: '#28c840'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10
      }
    }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 10,
        padding: 10,
        border: '1px solid rgba(255,255,255,0.08)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 42,
        borderRadius: 6,
        background: 'linear-gradient(135deg, rgba(19,114,246,0.4), rgba(249,112,21,0.3))',
        marginBottom: 8
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 7,
        width: '80%',
        borderRadius: 4,
        background: 'rgba(255,255,255,0.18)',
        marginBottom: 5
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 7,
        width: '55%',
        borderRadius: 4,
        background: 'rgba(255,255,255,0.10)'
      }
    })))));
  }
  function ValueCard({
    icon,
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 9,
        background: 'var(--gl-orange-50)',
        color: 'var(--gl-orange)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 3px',
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12.5,
        lineHeight: 1.45,
        color: 'var(--text-muted)'
      }
    }, children)));
  }
  function GLNavyDoneForMe() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gl-gradient-navy)',
        padding: '56px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 40,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "onDark",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "Wand2",
        size: 14
      })
    }, "Done-For-Me Setup"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 38,
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        color: '#fff'
      }
    }, "Get Your Business Discovered by Buyers \u2014 ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gl-orange)'
      }
    }, "Not Just a Website")), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Check, null, "B2B e-commerce website & digital catalogue with AI-powered search"), /*#__PURE__*/React.createElement(Check, null, "Structured set-up of up to 100 products, fully indexed"), /*#__PURE__*/React.createElement(Check, null, "Inquiry-ready setup with forms + lead capture"), /*#__PURE__*/React.createElement(Check, null, "Payment & shipping setup, configured for you")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--gl-slate-400)',
        textDecoration: 'line-through'
      }
    }, "\u20B990,000"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 32,
        fontWeight: 800,
        color: '#fff',
        lineHeight: 1
      }
    }, "\u20B924,999", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--gl-slate-300)'
      }
    }, "/yr"))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "ArrowRight",
        size: 18
      })
    }, "Proceed to Secure Checkout"))), /*#__PURE__*/React.createElement(BrowserPanel, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement(ValueCard, {
      icon: "Store",
      title: "Professional B2B Website"
    }, "A polished storefront buyers trust, hosted and managed end-to-end."), /*#__PURE__*/React.createElement(ValueCard, {
      icon: "ScanSearch",
      title: "AI & Search Discoverable"
    }, "Structured so Google and AI tools can understand and recommend you."), /*#__PURE__*/React.createElement(ValueCard, {
      icon: "LayoutDashboard",
      title: "Managed From One Panel"
    }, "Website, catalogue and marketplace listings handled in one dashboard."))));
  }
  window.GLNavyDoneForMe = GLNavyDoneForMe;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/NavyDoneForMe.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/PlanSelector.jsx
try { (() => {
/* PlanSelector — Pattern E: "Choose Your Path" three-tier grid, middle tier
   featured. Tiers are selectable. window.GLPlanSelector */
(function () {
  const {
    PlanCard
  } = window.GlobalLinkerDesignSystem_9deb5f;
  function GLPlanSelector() {
    const [sel, setSel] = React.useState('premium');
    const ring = key => sel === key ? {
      outline: '3px solid var(--focus-ring)',
      outlineOffset: 2
    } : {};
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gl-slate-50)',
        padding: '48px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1040,
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '0 0 8px',
        fontSize: 32,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)'
      }
    }, "Choose Your ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gl-blue)'
      }
    }, "Path")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-body)'
      }
    }, "Set up yourself, or let us build for you. Your effort, your outcomes.")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1040,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement(PlanCard, {
      name: "DIY Free",
      price: "\u20B90",
      period: "forever",
      description: "Start your digital presence",
      onCta: () => setSel('free'),
      ctaLabel: "Start Free",
      style: ring('free'),
      features: ["Basic catalog creation", "Company listing page", "Basic enquiry form", {
        label: "Verified seller badge",
        on: false
      }, {
        label: "AI-powered search",
        on: false
      }]
    }), /*#__PURE__*/React.createElement(PlanCard, {
      featured: true,
      name: "DIY Premium",
      price: "\u20B94,999",
      period: "/year",
      description: "Recommended for buyers",
      onCta: () => setSel('premium'),
      ctaLabel: "Upgrade to Premium",
      style: ring('premium'),
      features: ["Everything in Free", "AI-powered descriptions", "Your own B2B website", "Advanced analytics dashboard", "Verified seller badge"]
    }), /*#__PURE__*/React.createElement(PlanCard, {
      name: "Done-For-Me",
      price: "\u20B924,999",
      period: "/year",
      description: "We build it for you",
      onCta: () => setSel('dfm'),
      ctaLabel: "Get Expert Setup",
      style: ring('dfm'),
      features: ["Everything in Premium", "AI SEO-optimised pages", "Done-for-you B2B store", "Inquiry-ready product setup", "Multi-channel selling"]
    })));
  }
  window.GLPlanSelector = GLPlanSelector;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/PlanSelector.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/SearchCTA.jsx
try { (() => {
/* SearchCTA — Pattern B: subtle-gradient band with a procurement search bar
   and verified-supplier micro-badges. window.GLSearchCTA */
(function () {
  const {
    SearchBar,
    Badge
  } = window.GlobalLinkerDesignSystem_9deb5f;
  const Icon = window.GLIcon;
  function GLSearchCTA() {
    const [q, setQ] = React.useState(null);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gl-gradient-subtle)',
        padding: '56px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 34,
        fontWeight: 800,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)'
      }
    }, "Be Visible, ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gl-blue)'
      }
    }, "Where Buyers Search")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        color: 'var(--text-body)'
      }
    }, "Build a credible digital presence for global B2B sourcing."), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 600
      }
    }, /*#__PURE__*/React.createElement(SearchBar, {
      placeholder: "Search products, suppliers, categories\u2026",
      buttonLabel: "Search",
      onSearch: setQ
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "blue",
      solid: false
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "BadgeCheck",
      size: 13
    }), "Verified Suppliers"), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      solid: false
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ShieldCheck",
      size: 13
    }), "Trade-Ready Catalogues"), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      solid: false
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Globe",
      size: 13
    }), "150+ Countries")), q !== null && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Searching for ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--gl-blue)'
      }
    }, q || 'everything'), "\u2026 (demo)")));
  }
  window.GLSearchCTA = GLSearchCTA;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/SearchCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/SellerHero.jsx
try { (() => {
/* SellerHero — light gradient hero with eyebrow, mixed-color headline,
   CTAs, stat row and a trust-logo strip (Patterns B trust cues). window.GLSellerHero */
(function () {
  const {
    Button,
    Pill,
    Stat
  } = window.GlobalLinkerDesignSystem_9deb5f;
  const Icon = window.GLIcon;
  function TrustMark({
    label
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        opacity: 0.85
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 6,
        background: 'var(--gl-blue-50)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--gl-blue)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "BadgeCheck",
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: 'var(--gl-slate-600)'
      }
    }, label));
  }
  function GLSellerHero() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gl-gradient-subtle)',
        padding: '64px 32px 56px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 880,
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "blue",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "Sparkles",
        size: 14
      })
    }, "Seller Discovery Tools"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 50,
        fontWeight: 800,
        lineHeight: 1.08,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)'
      }
    }, "Get Your ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gl-blue)'
      }
    }, "Business Discovered"), /*#__PURE__*/React.createElement("br", null), "by More Buyers"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 620,
        fontSize: 17,
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, "Create your professional B2B website and product showcase \u2014 built for manufacturers, exporters and suppliers \u2014 so customers can easily find you, evaluate you, and send enquiries."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "ArrowRight",
        size: 18
      })
    }, "Get Started for Free"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg"
    }, "See Done-For-Me Plans")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 48,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      value: "50,000+",
      label: "Indian SMEs Onboarded"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "10,000+",
      label: "Transactions"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "150+",
      label: "Countries Reached"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "\u20B90",
      label: "To Get Started",
      tone: "orange"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 880,
        margin: '40px auto 0',
        borderTop: '1px solid rgba(30,41,59,0.08)',
        paddingTop: 22,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        margin: '0 0 14px'
      }
    }, "Trusted by India's Trade & Digital Commerce Ecosystem"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 36,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(TrustMark, {
      label: "FIEO"
    }), /*#__PURE__*/React.createElement(TrustMark, {
      label: "ONDC"
    }), /*#__PURE__*/React.createElement(TrustMark, {
      label: "Indian Business Portal"
    }), /*#__PURE__*/React.createElement(TrustMark, {
      label: "DGFT"
    }))));
  }
  window.GLSellerHero = GLSellerHero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/SellerHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/SolutionGrid.jsx
try { (() => {
/* SolutionGrid — "The Solution" section: eyebrow + heading + 3 benefit cards
   (Pattern C) + a compact seller-dashboard stat strip. window.GLSolutionGrid */
(function () {
  const {
    Pill,
    FeatureCard,
    Stat
  } = window.GlobalLinkerDesignSystem_9deb5f;
  const Icon = window.GLIcon;
  function GLSolutionGrid() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: '#fff',
        padding: '48px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "success",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "Lightbulb",
        size: 14
      })
    }, "The Solution"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 32,
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)'
      }
    }, "Turn Your Product Catalogue Into a", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gl-blue)'
      }
    }, "Discoverable, Trade-Ready B2B Presence")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 640,
        fontSize: 15,
        color: 'var(--text-body)'
      }
    }, "GlobalLinker helps you structure products, certifications and company information so you support B2B discovery, evaluation and enquiries.")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '32px auto 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(FeatureCard, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "ShieldCheck",
        size: 20
      }),
      tag: "Build Trust",
      title: "Credibility"
    }, "Present your products and business in the third-party details buyers expect \u2014 locations, certifications and company context."), /*#__PURE__*/React.createElement(FeatureCard, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "Search",
        size: 20
      }),
      iconTone: "orange",
      tag: "Get Visibility",
      title: "Discoverability"
    }, "Structured catalogues and SEO-friendly pages help your business get found when buyers search."), /*#__PURE__*/React.createElement(FeatureCard, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "Globe2",
        size: 20
      }),
      tag: "Enable Trade",
      title: "Trade Readiness"
    }, "Enable inquiries, product comparison and evaluation beyond a static brochure or PDF.")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '24px auto 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--gl-slate-50)',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-lg)',
        padding: '18px 26px'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 14px',
        fontSize: 12,
        fontWeight: 700,
        color: 'var(--text-muted)'
      }
    }, "Your Seller Dashboard"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      value: "1,247",
      label: "Profile Views",
      align: "left",
      size: "sm"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "23",
      label: "Active RFQs",
      align: "left",
      size: "sm",
      tone: "orange"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "94%",
      label: "Response Rate",
      align: "left",
      size: "sm"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "156",
      label: "Products Listed",
      align: "left",
      size: "sm"
    })))));
  }
  window.GLSolutionGrid = GLSolutionGrid;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/SolutionGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/TestimonialRibbon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TestimonialRibbon — Pattern F: heading + 4-up testimonial grid +
   compact partner-logo ribbon. window.GLTestimonialRibbon */
(function () {
  const {
    Testimonial
  } = window.GlobalLinkerDesignSystem_9deb5f;
  const ITEMS = [{
    name: 'Vivek Kumar',
    role: 'Founder',
    company: 'Bloom Electronics',
    quote: "We're now reaching more customers digitally through GlobalLinker — growing faster with minimal effort."
  }, {
    name: 'Rajeshwari Rawat',
    role: 'Director',
    company: 'Lakshmi Organics',
    quote: 'The structured listing helped us appear in genuine buyer searches across India and beyond.'
  }, {
    name: 'Aakash Mehta',
    role: 'Export Head',
    company: 'Shakti Distillers',
    quote: 'Being indexed across B2B channels and AI tools brought us serious, trade-ready enquiries.'
  }, {
    name: 'Rahul Parkar',
    role: 'MD',
    company: 'JPS Global',
    quote: 'A clean catalogue and clear presence finally put us in front of the right international buyers.'
  }];
  function GLTestimonialRibbon() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gl-slate-50)',
        padding: '48px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '0 0 8px',
        fontSize: 30,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)'
      }
    }, "Indian SMEs Are Building ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gl-blue)'
      }
    }, "Discoverable Digital Businesses")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-body)'
      }
    }, "Real businesses. Real growth. Hear from entrepreneurs who transformed their visibility.")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16
      }
    }, ITEMS.map((t, i) => /*#__PURE__*/React.createElement(Testimonial, _extends({
      key: i
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '32px auto 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 44,
        flexWrap: 'wrap',
        opacity: 0.7
      }
    }, ['SMERA', 'LAKSHA', 'SHAKTI', 'ONDC', 'FIEO'].map(p => /*#__PURE__*/React.createElement("span", {
      key: p,
      style: {
        fontSize: 15,
        fontWeight: 800,
        letterSpacing: '0.04em',
        color: 'var(--gl-slate-500)'
      }
    }, p))));
  }
  window.GLTestimonialRibbon = GLTestimonialRibbon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/TestimonialRibbon.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.PlanCard = __ds_scope.PlanCard;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
