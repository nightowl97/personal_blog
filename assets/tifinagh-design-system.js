/* @ds-bundle: {"format":3,"namespace":"KharchoufEditorialDesignSystem_43c58f","components":[{"name":"Blockquote","sourcePath":"components/blog/Blockquote.jsx"},{"name":"CategoryList","sourcePath":"components/blog/CategoryList.jsx"},{"name":"FeaturedPost","sourcePath":"components/blog/FeaturedPost.jsx"},{"name":"Navbar","sourcePath":"components/blog/Navbar.jsx"},{"name":"PostCard","sourcePath":"components/blog/PostCard.jsx"},{"name":"PostRow","sourcePath":"components/blog/PostRow.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/blog/Blockquote.jsx":"d928607484cd","components/blog/CategoryList.jsx":"b3a6c6ccb570","components/blog/FeaturedPost.jsx":"58ac6e7034e0","components/blog/Navbar.jsx":"4b0efc13eae8","components/blog/PostCard.jsx":"f3339e6ca888","components/blog/PostRow.jsx":"7cdf932cde0e","components/core/Avatar.jsx":"21309397f3d3","components/core/Button.jsx":"7ec432275520","components/core/Eyebrow.jsx":"fc89a3de2687","components/core/Input.jsx":"ce382a49b2fd","components/core/Tag.jsx":"0d692f2e132a","ui_kits/blog/AboutScreen.jsx":"ad1a4f2f45d5","ui_kits/blog/App.jsx":"d46b9b2d30c6","ui_kits/blog/CVScreen.jsx":"43daa36e1519","ui_kits/blog/ListingScreen.jsx":"9582fca56b6d","ui_kits/blog/PostScreen.jsx":"33f0a5a5e87e","ui_kits/blog/data.js":"f2ca62915ae9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KharchoufEditorialDesignSystem_43c58f = window.KharchoufEditorialDesignSystem_43c58f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blog/Blockquote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Blockquote — terracotta left-rule, italic serif. The brand's pull-quote and
 * epigraph treatment, used throughout long-form posts and the CV summary.
 */
function Blockquote({
  children,
  cite,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      borderLeft: '2px solid var(--accent, #B8693C)',
      paddingLeft: '1.25rem',
      marginLeft: 0,
      marginRight: 0,
      fontFamily: "'Merriweather', Georgia, serif",
      fontStyle: 'italic',
      fontSize: '1.05rem',
      lineHeight: 1.7,
      color: 'var(--text-secondary, #ABA49A)',
      ...style
    }
  }, rest), children, cite ? /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: '0.75rem',
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontStyle: 'normal',
      fontSize: '0.78rem',
      letterSpacing: '0.04em',
      color: 'var(--text-muted, #5C5450)'
    }
  }, "\u2014 ", cite) : null);
}
Object.assign(__ds_scope, { Blockquote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blog/Blockquote.jsx", error: String((e && e.message) || e) }); }

// components/blog/CategoryList.jsx
try { (() => {
/**
 * CategoryList — the listing sidebar. Terracotta "CATEGORIES" title over a
 * vertical list of category links; the active one gets a terracotta left rule.
 * Optional counts, exactly like the Quarto listing sidebar.
 */
function CategoryList({
  title = 'Categories',
  items = [],
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      fontFamily: "'DM Sans', system-ui, sans-serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.65rem',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--accent, #B8693C)',
      borderBottom: '1px solid var(--surface, #2C2926)',
      paddingBottom: '0.5rem',
      marginBottom: '0.5rem'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, items.map(it => {
    const label = typeof it === 'string' ? it : it.label;
    const count = typeof it === 'string' ? undefined : it.count;
    const isActive = active === label;
    return /*#__PURE__*/React.createElement("li", {
      key: label
    }, /*#__PURE__*/React.createElement(CategoryItem, {
      label: label,
      count: count,
      active: isActive,
      onSelect: onSelect
    }));
  })));
}
function CategoryItem({
  label,
  count,
  active,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: `#${label}`,
    onClick: onSelect ? e => {
      e.preventDefault();
      onSelect(label);
    } : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '10px',
      fontSize: '0.82rem',
      color: active ? 'var(--text-primary, #F2EDE4)' : hover ? 'var(--text-secondary, #ABA49A)' : 'var(--text-muted, #5C5450)',
      fontWeight: active ? 500 : 400,
      textDecoration: 'none',
      padding: '2px 0',
      borderLeft: active ? '2px solid var(--accent, #B8693C)' : '2px solid transparent',
      paddingLeft: active ? '8px' : '0',
      transition: 'color var(--dur-fast,0.15s) var(--ease,ease), padding var(--dur-fast,0.15s) var(--ease,ease)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted, #5C5450)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: '0.72rem'
    }
  }, count) : null);
}
Object.assign(__ds_scope, { CategoryList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blog/CategoryList.jsx", error: String((e && e.message) || e) }); }

// components/blog/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Navbar — the site's top bar. Warm surface, Playfair brand name, DM Sans
 * links that brighten to warm white on hover, and Bootstrap-icon social links
 * on the right (matching the live site's iconography).
 */
function Navbar({
  brand = 'Youssef Kharchouf',
  links = [],
  icons = [],
  active
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--surface, #2C2926)',
      borderBottom: '1px solid var(--border, #3D3830)',
      padding: '0 28px',
      height: 58,
      fontFamily: "'DM Sans', system-ui, sans-serif"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: '1.05rem',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary, #F2EDE4)',
      textDecoration: 'none'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '26px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, _extends({
    key: l.label
  }, l, {
    active: active === l.label
  }))), icons.length ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginLeft: '4px'
    }
  }, icons.map(ic => /*#__PURE__*/React.createElement(NavIcon, _extends({
    key: ic.label || ic.icon
  }, ic)))) : null));
}
function NavLink({
  label,
  href = '#',
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontSize: '0.92rem',
      color: active || hover ? 'var(--text-primary, #F2EDE4)' : 'var(--text-secondary, #ABA49A)',
      textDecoration: 'none',
      transition: 'color var(--dur-fast,0.15s) var(--ease,ease)'
    }
  }, label);
}
function NavIcon({
  icon,
  href = '#',
  label
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: hover ? 'var(--text-primary, #F2EDE4)' : 'var(--text-secondary, #ABA49A)',
      fontSize: '1.1rem',
      display: 'inline-flex',
      transition: 'color var(--dur-fast,0.15s) var(--ease,ease)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${icon}`
  }));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blog/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular portrait with a hairline warm border. Sizes from xs (inline)
 * to xl (about-page hero). Falls back to initials on a warm surface.
 */
function Avatar({
  src,
  alt = '',
  name,
  size = 'md',
  ring = true,
  ...rest
}) {
  const sizes = {
    xs: 28,
    sm: 40,
    md: 64,
    lg: 96,
    xl: 140
  };
  const px = sizes[size] || sizes.md;
  const initials = (name || alt || '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const base = {
    width: px,
    height: px,
    borderRadius: '50%',
    border: ring ? '1px solid var(--border-strong, #4A443C)' : 'none',
    boxShadow: ring ? '0 0 0 4px var(--surface, #2C2926)' : 'none',
    flexShrink: 0,
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--surface-raised, #34302B)'
  };
  if (src) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: base
    }, rest), /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: px * 0.38,
      color: 'var(--text-secondary, #ABA49A)'
    }
  }, initials || '·'));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — editorial, restrained. Terracotta accent used sparingly.
 * Variants: primary (filled terracotta), secondary (hairline border),
 * ghost (text only). Sizes: sm, md.
 */
function Button({
  children,
  variant = 'secondary',
  size = 'md',
  href,
  icon,
  iconRight,
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '6px 14px',
      fontSize: '0.72rem',
      tracking: '0.1em'
    },
    md: {
      padding: '9px 20px',
      fontSize: '0.78rem',
      tracking: '0.1em'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontWeight: 500,
    fontSize: s.fontSize,
    letterSpacing: s.tracking,
    textTransform: 'uppercase',
    padding: s.padding,
    borderRadius: 'var(--radius-xs, 2px)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    lineHeight: 1,
    transition: 'all var(--dur-fast, 0.15s) var(--ease, ease)',
    opacity: disabled ? 0.45 : 1,
    border: '1px solid transparent',
    userSelect: 'none',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--accent, #B8693C)',
      color: 'var(--ink-900, #1E1C1A)',
      borderColor: 'var(--accent, #B8693C)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-secondary, #ABA49A)',
      borderColor: 'var(--border, #3D3830)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent, #B8693C)',
      borderColor: 'transparent',
      padding: `${s.padding.split(' ')[0]} 0`
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: {
      background: 'var(--link-hover, #CE7E4E)',
      borderColor: 'var(--link-hover, #CE7E4E)'
    },
    secondary: {
      color: 'var(--text-primary, #F2EDE4)',
      borderColor: 'var(--accent, #B8693C)'
    },
    ghost: {
      color: 'var(--link-hover, #CE7E4E)'
    }
  };
  const style = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? hoverStyles[variant] : {})
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      fontSize: '1em'
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      fontSize: '1em'
    }
  }, iconRight) : null);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: style
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — small uppercase DM Sans label in terracotta, used above sections
 * and as CV-style section headings. The brand's signature metadata label.
 */
function Eyebrow({
  children,
  as = 'div',
  color = 'accent',
  size = 'sm',
  ...rest
}) {
  const Tag = as;
  const colors = {
    accent: 'var(--accent, #B8693C)',
    muted: 'var(--text-muted, #5C5450)',
    secondary: 'var(--text-secondary, #ABA49A)'
  };
  const sizes = {
    xs: {
      fontSize: '0.62rem',
      letterSpacing: '0.12em'
    },
    sm: {
      fontSize: '0.68rem',
      letterSpacing: '0.16em'
    },
    md: {
      fontSize: '0.8rem',
      letterSpacing: '0.18em'
    }
  };
  const s = sizes[size] || sizes.sm;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontWeight: 500,
      textTransform: 'uppercase',
      color: colors[color] || colors.accent,
      fontSize: s.fontSize,
      letterSpacing: s.letterSpacing,
      margin: 0
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field on a warm surface with a hairline border
 * that focuses to terracotta. Optional leading label (Eyebrow style).
 */
function Input({
  label,
  id,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  onChange,
  textarea = false,
  rows = 4,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: "'Merriweather', Georgia, serif",
    fontSize: '0.95rem',
    color: 'var(--text-primary, #F2EDE4)',
    background: 'var(--surface, #2C2926)',
    border: `1px solid ${focus ? 'var(--accent, #B8693C)' : 'var(--border, #3D3830)'}`,
    borderRadius: 'var(--radius-sm, 3px)',
    padding: textarea ? '12px 14px' : '10px 14px',
    outline: 'none',
    transition: 'border-color var(--dur-fast,0.15s) var(--ease,ease)',
    resize: textarea ? 'vertical' : undefined,
    lineHeight: 1.6
  };
  const handlers = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange,
    value,
    defaultValue,
    placeholder
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontWeight: 500,
      fontSize: '0.68rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted, #5C5450)'
    }
  }, label) : null, textarea ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    style: fieldStyle
  }, handlers, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    style: fieldStyle
  }, handlers, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — bordered, uppercase category chip exactly as used in the blog listing.
 * Hairline border that turns terracotta on hover when interactive.
 */
function Tag({
  children,
  href,
  active = false,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(href || onClick);
  const style = {
    display: 'inline-block',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '0.62rem',
    fontWeight: 500,
    letterSpacing: '0.09em',
    textTransform: 'uppercase',
    color: active || hover && interactive ? 'var(--accent, #B8693C)' : 'var(--text-muted, #5C5450)',
    border: `1px solid ${active || hover && interactive ? 'var(--accent, #B8693C)' : 'var(--border, #3D3830)'}`,
    borderRadius: 'var(--radius-xs, 2px)',
    padding: '2px 7px',
    background: 'transparent',
    textDecoration: 'none',
    cursor: interactive ? 'pointer' : 'default',
    transition: 'color var(--dur-fast,0.15s) var(--ease,ease), border-color var(--dur-fast,0.15s) var(--ease,ease)',
    whiteSpace: 'nowrap'
  };
  const handlers = interactive ? {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  } : {};
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: style
    }, handlers, rest), children);
  }
  if (onClick) {
    return /*#__PURE__*/React.createElement("button", _extends({
      type: "button",
      onClick: onClick,
      style: {
        ...style,
        font: 'inherit'
      }
    }, handlers, rest), children);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/blog/FeaturedPost.jsx
try { (() => {
/**
 * FeaturedPost — the Gallery hero. A cinematic, warm-dimmed cover with the
 * title and meta laid over a bottom protection gradient. If no image is given,
 * it renders a confident type-only hero on the surface instead.
 */
function FeaturedPost({
  title,
  date,
  categories = [],
  description,
  image,
  href = '#',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const hasImage = Boolean(image);
  const Meta = () => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      flexWrap: 'wrap',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontSize: '0.62rem',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent, #B8693C)',
      marginRight: '8px'
    }
  }, "Featured"), categories.slice(0, 3).map(c => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: c
  }, c)));
  const Title = ({
    over
  }) => /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)',
      lineHeight: 1.12,
      letterSpacing: '-0.01em',
      color: over && hover ? 'var(--link-hover, #CE7E4E)' : 'var(--text-primary, #F2EDE4)',
      margin: '0 0 10px',
      maxWidth: '20ch',
      transition: 'color var(--dur-fast,0.15s) var(--ease,ease)'
    }
  }, title);
  const Desc = ({
    muted
  }) => description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Merriweather', Georgia, serif",
      fontSize: '0.95rem',
      lineHeight: 1.7,
      color: muted ? 'var(--text-secondary, #ABA49A)' : 'rgba(242,237,228,0.82)',
      margin: 0,
      maxWidth: '52ch'
    }
  }, description) : null;
  if (!hasImage) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'block',
        textDecoration: 'none',
        background: 'radial-gradient(120% 160% at 100% 0%, rgba(184,105,60,0.16), transparent 50%), var(--surface, #2C2926)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '40px 38px'
      }
    }, /*#__PURE__*/React.createElement(Meta, null), /*#__PURE__*/React.createElement(Title, {
      over: false
    }), /*#__PURE__*/React.createElement(Desc, {
      muted: true
    }));
  }
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      aspectRatio: '21 / 9'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: hover ? 'saturate(0.85) brightness(0.78)' : 'saturate(0.45) brightness(0.6)',
      transition: 'filter var(--dur-mid,0.25s) var(--ease,ease)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(19,18,16,0.94) 0%, rgba(19,18,16,0.45) 45%, rgba(30,28,26,0.15) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '30px 32px'
    }
  }, /*#__PURE__*/React.createElement(Meta, null), /*#__PURE__*/React.createElement(Title, {
    over: true
  }), /*#__PURE__*/React.createElement(Desc, null)));
}
Object.assign(__ds_scope, { FeaturedPost });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blog/FeaturedPost.jsx", error: String((e && e.message) || e) }); }

// components/blog/PostCard.jsx
try { (() => {
/**
 * PostCard — the Gallery-direction card. Image-forward when a cover exists;
 * falls back to a typographic terracotta-rule card when it doesn't. Light or
 * off-palette figures can be set `fit="warm"` to sit in the dark theme.
 */
function PostCard({
  title,
  date,
  categories = [],
  image,
  fit = 'photo',
  // 'photo' | 'warm' | 'figure'
  href = '#',
  size = 'md',
  // 'md' | 'sm'
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const hasImage = Boolean(image);
  const titleSize = size === 'sm' ? '1.05rem' : '1.25rem';
  const card = {
    display: 'block',
    textDecoration: 'none',
    cursor: 'pointer',
    background: hasImage ? 'transparent' : 'var(--surface)',
    border: hasImage ? 'none' : '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    padding: hasImage ? 0 : '20px 22px 22px',
    overflow: 'hidden',
    transition: 'border-color var(--dur-fast,0.15s) var(--ease,ease)',
    ...(hasImage ? {} : {
      borderColor: hover ? 'var(--accent-border, #704030)' : 'var(--border)'
    })
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: card
  }, hasImage ? /*#__PURE__*/React.createElement(Cover, {
    image: image,
    fit: fit,
    hover: hover,
    size: size
  }) : /*#__PURE__*/React.createElement(FallbackMark, {
    hover: hover
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: hasImage ? '13px' : '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontSize: '0.66rem',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted, #5C5450)'
    }
  }, date), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: titleSize,
      lineHeight: 1.22,
      color: hover ? 'var(--accent, #B8693C)' : 'var(--text-primary, #F2EDE4)',
      margin: '7px 0 10px',
      transition: 'color var(--dur-fast,0.15s) var(--ease,ease)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      flexWrap: 'wrap'
    }
  }, categories.slice(0, 2).map(c => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: c
  }, c)))));
}
function Cover({
  image,
  fit,
  hover,
  size
}) {
  // Base filter: brand desaturation that restores on hover.
  const filters = {
    photo: hover ? 'saturate(1) brightness(1)' : 'saturate(0.25) brightness(0.78)',
    warm: hover ? 'saturate(0.75) brightness(0.9)' : 'saturate(0.18) brightness(0.7)',
    figure: hover ? 'saturate(0.9) brightness(0.96)' : 'saturate(0.3) brightness(0.82)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: size === 'sm' ? '16 / 10' : '16 / 9',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit === 'figure' ? 'contain' : 'cover',
      display: 'block',
      padding: fit === 'figure' ? '8%' : 0,
      boxSizing: 'border-box',
      filter: filters[fit] || filters.photo,
      transition: 'filter var(--dur-mid,0.25s) var(--ease,ease)'
    }
  }), fit !== 'photo' ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: fit === 'figure' ? 'var(--surface)' : 'linear-gradient(160deg, rgba(138,51,36,0.28), rgba(30,28,26,0.55))',
      mixBlendMode: fit === 'figure' ? 'normal' : 'multiply',
      opacity: hover ? 0 : 1,
      transition: 'opacity var(--dur-mid,0.25s) var(--ease,ease)',
      pointerEvents: 'none',
      zIndex: fit === 'figure' ? -1 : 1
    }
  }) : null);
}
function FallbackMark({
  hover
}) {
  // Typographic cover for posts with no usable image: a quarter-circle
  // terracotta motif on a surface panel, echoing the masthead rule.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 9',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      background: 'radial-gradient(120% 140% at 0% 100%, rgba(184,105,60,0.20), transparent 55%), var(--ink-900, #1E1C1A)',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: '2.4rem',
      color: hover ? 'var(--accent, #B8693C)' : 'var(--accent-border, #704030)',
      transition: 'color var(--dur-fast,0.15s) var(--ease,ease)'
    }
  }, "\xB6"));
}
Object.assign(__ds_scope, { PostCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blog/PostCard.jsx", error: String((e && e.message) || e) }); }

// components/blog/PostRow.jsx
try { (() => {
/**
 * PostRow — a single entry in the blog listing. Date column (uppercase DM Sans),
 * a Playfair title that turns terracotta on hover, category tags, a serif
 * description, and an optional desaturated thumbnail that restores on hover.
 */
function PostRow({
  title,
  date,
  description,
  categories = [],
  href = '#',
  image,
  showThumb = true
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: showThumb ? '92px 1fr 150px' : '92px 1fr',
      gap: '28px',
      alignItems: 'start',
      padding: '28px 0',
      borderTop: '1px solid var(--surface, #2C2926)'
    }
  }, /*#__PURE__*/React.createElement("time", {
    style: {
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontSize: '0.7rem',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted, #5C5450)',
      paddingTop: '0.35rem',
      whiteSpace: 'nowrap'
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px',
      marginBottom: '0.5rem'
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: c,
    href: `#${c}`
  }, c))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 0.55rem 0'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.35rem',
      fontWeight: 700,
      lineHeight: 1.25,
      color: hover ? 'var(--accent, #B8693C)' : 'var(--text-primary, #F2EDE4)',
      textDecoration: 'none',
      transition: 'color var(--dur-fast,0.15s) var(--ease,ease)'
    }
  }, title)), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Merriweather', Georgia, serif",
      fontSize: '0.95rem',
      lineHeight: 1.75,
      color: 'var(--text-secondary, #ABA49A)',
      margin: 0
    }
  }, description) : null), showThumb ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'block',
      aspectRatio: '16 / 9',
      borderRadius: 'var(--radius-md,4px)',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'var(--radius-md,4px)',
      filter: hover ? 'saturate(1) brightness(1)' : 'saturate(0.2) brightness(0.75)',
      transition: 'filter var(--dur-mid,0.25s) var(--ease,ease)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      background: 'var(--surface,#2C2926)'
    }
  })) : null);
}
Object.assign(__ds_scope, { PostRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blog/PostRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/AboutScreen.jsx
try { (() => {
// About screen — centered portrait hero (Quarto "jolla" template), bio prose,
// social links, and a short contact form composed from the primitives.
function AboutScreen() {
  const {
    Avatar,
    Button,
    Input,
    Eyebrow
  } = window.KharchoufEditorialDesignSystem_43c58f;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: '0 auto',
      padding: '64px 48px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '38px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/portrait.png",
    name: "Youssef Kharchouf",
    size: "xl"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      margin: '22px 0 6px'
    }
  }, "Youssef Kharchouf"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.05rem',
      color: 'var(--accent)',
      margin: 0
    }
  }, "Physical chemistry researcher"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px',
      fontSize: '1.1rem',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "CV",
    style: {
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-file-person"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn",
    style: {
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-linkedin"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "GitHub",
    style: {
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-github"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Google Scholar",
    style: {
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-mortarboard-fill"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)',
      paddingTop: '34px'
    }
  }, ['I\u2019m Youssef, a physical chemistry researcher. My work sits at the intersection of physics, chemistry and computation. I build numerical models of physical phenomena that help understand and optimize energy systems like batteries, fuel cells, electrolyzers, and photovoltaics.', 'I also have other interests, as the rest of this blog will make embarrassingly clear. This is where I keep notes on things I find interesting enough to write down — books, ideas and newly learned concepts. It has no fixed audience and no particular agenda, which is probably why it contains both a derivation of the QED Lagrangian and strong opinions about Yuval Noah Harari.'].map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.05rem',
      lineHeight: 1.85,
      color: 'var(--text-secondary)',
      margin: '0 0 1.4rem'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)',
      marginTop: '24px',
      paddingTop: '34px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    as: "h2",
    size: "md",
    style: {
      marginBottom: '20px'
    }
  }, "Get in touch"), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      color: 'var(--text-secondary)',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-check2",
    style: {
      color: 'var(--accent)',
      marginRight: 8
    }
  }), "Thanks \u2014 your note is on its way. (Not really; this is a demo.)") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your email",
    type: "email",
    placeholder: "you@domain.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    textarea: true,
    rows: 4,
    placeholder: "Say hello\\u2026"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Send note")))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/App.jsx
try { (() => {
// App shell — Navbar + simple client routing across the four screens.
function App() {
  const {
    Navbar
  } = window.KharchoufEditorialDesignSystem_43c58f;
  const [route, setRoute] = React.useState('home'); // home | about | cv | post
  const [activeCategory, setActiveCategory] = React.useState(null);
  const [postSlug, setPostSlug] = React.useState(null);
  const posts = window.BLOG_POSTS;
  const post = posts.find(p => p.slug === postSlug) || null;
  const go = r => {
    setRoute(r);
    window.scrollTo(0, 0);
  };
  const openPost = slug => {
    setPostSlug(slug);
    setRoute('post');
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    brand: "Youssef Kharchouf",
    active: route === 'about' ? 'About' : route === 'cv' ? 'CV' : 'Posts',
    links: [{
      label: 'Posts',
      href: '#',
      onClick: () => go('home')
    }, {
      label: 'About',
      href: '#',
      onClick: () => go('about')
    }, {
      label: 'CV',
      href: '#',
      onClick: () => go('cv')
    }],
    icons: [{
      icon: 'github',
      href: '#',
      label: 'GitHub'
    }, {
      icon: 'linkedin',
      href: '#',
      label: 'LinkedIn'
    }, {
      icon: 'mortarboard-fill',
      href: '#',
      label: 'Google Scholar'
    }]
  }), route === 'home' && /*#__PURE__*/React.createElement(ListingScreen, {
    posts: posts,
    categories: window.BLOG_CATEGORIES,
    activeCategory: activeCategory,
    onSelectCategory: setActiveCategory,
    onOpenPost: openPost
  }), route === 'post' && /*#__PURE__*/React.createElement(PostScreen, {
    post: post,
    onBack: () => go('home')
  }), route === 'about' && /*#__PURE__*/React.createElement(AboutScreen, null), route === 'cv' && /*#__PURE__*/React.createElement(CVScreen, null), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border)',
      padding: '28px 48px',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.72rem',
      letterSpacing: '0.06em',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 Youssef Kharchouf \xB7 Built with the Kharchouf Editorial Design System"));
}

// The Navbar primitive renders <a href>; intercept clicks so demo routing works.
function RoutedApp() {
  React.useEffect(() => {
    const handler = e => {
      const a = e.target.closest('nav a');
      if (a && a.getAttribute('href') === '#') e.preventDefault();
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
  return /*#__PURE__*/React.createElement(App, null);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(RoutedApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/CVScreen.jsx
try { (() => {
// CV screen — editorial r\u00e9sum\u00e9 view mirroring cv.qmd: header, summary with terracotta
// rule, uppercase section headings, roles, and a skills grid.
function CVScreen() {
  const {
    Eyebrow,
    Blockquote,
    Button,
    Tag
  } = window.KharchoufEditorialDesignSystem_43c58f;
  const Section = ({
    title,
    children
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '1.05rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      margin: '0 0 1.4rem',
      paddingBottom: '0.5rem',
      borderBottom: '3px solid var(--border)'
    }
  }, title), children);
  const Role = ({
    role,
    meta,
    bullets
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.8rem'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '1.05rem',
      color: 'var(--text-primary)',
      margin: '0 0 0.2rem'
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.85rem',
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      marginBottom: '0.8rem'
    }
  }, meta), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: '1.1rem',
      color: 'var(--text-secondary)'
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '0.96rem',
      lineHeight: 1.7,
      marginBottom: '0.5rem'
    }
  }, b))));
  const skills = [['Scientific Computing & Simulation', 'Python scientific stack (NumPy, SciPy, Pandas). Custom solvers across finite differences and finite elements. COMSOL Multiphysics, convergence & mesh-independence analysis, CUDA acceleration.'], ['Machine Learning & Data-Driven Modeling', 'PyTorch, transformer architectures for QSPR prediction. Classical ML, cross-validation, cheminformatics and molecular descriptor analysis.'], ['Energy Systems Modeling', 'Batteries and electrolyzers: state-dependent dynamics, efficiency and degradation. Coupled electrochemistry\u2013transport\u2013thermal interactions.'], ['Experimental & Analytical Chemistry', 'Cyclic voltammetry, chronopotentiometry, EIS, polarization curves. Ionic-liquid synthesis, microfluidics, stereolithography 3D printing.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '56px 48px 80px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: '1px solid var(--border)',
      paddingBottom: '1.75rem',
      marginBottom: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.2rem,4vw,2.8rem)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      margin: '0 0 0.4rem'
    }
  }, "Youssef Kharchouf"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.15rem',
      color: 'var(--accent)',
      marginBottom: '0.15rem'
    }
  }, "Research Engineer \xB7 Computational Scientist"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.92rem',
      color: 'var(--text-secondary)'
    }
  }, "Multiphysics modeling \xB7 Scientific machine learning \xB7 Energy systems")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "bi bi-download"
    })
  }, "PDF"))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '2.2rem 0'
    }
  }, /*#__PURE__*/React.createElement(Blockquote, null, "Computational scientist with a PhD from Sorbonne Universit\\u00e9 and postdoctoral experience at CNRS, working at the intersection of physics-based modeling, scientific machine learning, and experimental validation. Most recently for electrochemical energy systems within the French national hydrogen program.")), /*#__PURE__*/React.createElement(Section, {
    title: "Experience"
  }, /*#__PURE__*/React.createElement(Role, {
    role: "Postdoctoral Researcher",
    meta: "Laboratoire de R\\u00e9activit\\u00e9 de Surface, CNRS \xB7 2024 \\u2013 2025",
    bullets: ['Led the multiphysics modeling strategy as sole simulation engineer, coupling electrochemistry, CFD transport and morphological evolution within the PEPR H2 COSTO national hydrogen program.', 'Built a Transformer-based QSPR model (PyTorch) predicting ionic-liquid viscosity and density from molecular descriptors.', 'Developed finite-element models in COMSOL integrating electrochemistry and multiphase transport, with full convergence analysis.']
  }), /*#__PURE__*/React.createElement(Role, {
    role: "PhD Candidate in Physical Chemistry",
    meta: "Sorbonne Universit\\u00e9 \xB7 2020 \\u2013 2023",
    bullets: ['Designed and implemented a custom Lattice Boltzmann solver in Python coupling ionic transport, electrochemical reactions and hydrodynamics for microfluidic redox flow batteries.', 'Achieved a 10\u00d7 performance improvement over baseline designs by formulating geometry optimization with physical constraints.']
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Technical Expertise"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.6rem 2rem',
      marginTop: '0.5rem'
    }
  }, skills.map(([label, body]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "xs",
    style: {
      marginBottom: '0.5rem'
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '0.92rem',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, body))))), /*#__PURE__*/React.createElement(Section, {
    title: "Languages"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, "Amazigh"), /*#__PURE__*/React.createElement(Tag, null, "native"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, "English \xB7 French \xB7 Arabic"), /*#__PURE__*/React.createElement(Tag, null, "professional"))));
}
Object.assign(window, {
  CVScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/CVScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/ListingScreen.jsx
try { (() => {
// Listing (home) screen — GALLERY direction.
// A masthead, a cinematic featured hero (newest post with a strong photo),
// then a responsive grid of PostCards. Posts without good imagery degrade to
// the typographic fallback card; light figures use the warm/figure fit.
function ListingScreen({
  posts,
  categories,
  activeCategory,
  onSelectCategory,
  onOpenPost
}) {
  const {
    FeaturedPost,
    PostCard,
    CategoryList,
    Eyebrow
  } = window.KharchoufEditorialDesignSystem_43c58f;
  const filtered = activeCategory ? posts.filter(p => p.categories.includes(activeCategory)) : posts;

  // Feature the first post that has a genuine photo (fit photo/warm) — only
  // when unfiltered, so filtering returns a clean, even grid.
  const feature = !activeCategory ? filtered.find(p => p.featured && p.image) || filtered.find(p => p.image && p.fit !== 'figure') : null;
  const rest = feature ? filtered.filter(p => p.slug !== feature.slug) : filtered;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '40px 48px 80px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Notes & Essays"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '2.4rem',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      margin: '10px 0 0',
      lineHeight: 1.05
    }
  }, "The Reading Room")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '0.98rem',
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      maxWidth: '42ch',
      margin: 0
    }
  }, "Things I found interesting enough to write down \u2014 books, ideas, and newly learned concepts. No fixed audience, no particular agenda.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border)',
      marginTop: 24,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 64,
      height: 2,
      background: 'var(--accent)'
    }
  }))), feature ? /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpenPost(feature.slug),
    style: {
      marginBottom: '34px'
    }
  }, /*#__PURE__*/React.createElement(FeaturedPost, {
    title: feature.title,
    date: feature.date,
    categories: feature.categories,
    description: feature.description,
    image: feature.image,
    href: "#"
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "muted",
    size: "xs"
  }, activeCategory ? `Filed under ${activeCategory}` : 'Latest'), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--surface)'
    }
  }), /*#__PURE__*/React.createElement(CategoryFilterRow, {
    categories: categories,
    active: activeCategory,
    onSelect: label => onSelectCategory(label === activeCategory ? null : label)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '34px 28px'
    }
  }, rest.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.slug,
    onClick: () => onOpenPost(p.slug)
  }, /*#__PURE__*/React.createElement(PostCard, {
    title: p.title,
    date: p.date,
    categories: p.categories,
    image: p.image,
    fit: p.fit,
    href: "#"
  })))), rest.length === 0 && !feature ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      color: 'var(--text-muted)',
      paddingTop: 24
    }
  }, "No posts in this category yet.") : null);
}

// Inline, horizontal category filter — uses the Tag look via CategoryList’s
// vocabulary but laid out as a single scannable row.
function CategoryFilterRow({
  categories,
  active,
  onSelect
}) {
  const {
    Tag
  } = window.KharchoufEditorialDesignSystem_43c58f;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    active: !active,
    onClick: () => onSelect(active)
  }, "all"), categories.map(c => {
    const label = typeof c === 'string' ? c : c.label;
    return /*#__PURE__*/React.createElement(Tag, {
      key: label,
      active: active === label,
      onClick: () => onSelect(label)
    }, label);
  }));
}
Object.assign(window, {
  ListingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/ListingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/PostScreen.jsx
try { (() => {
// Post (article) screen — banner title block + long-form body with the brand's
// reading treatments (Playfair headings, Merriweather body, terracotta quotes, code blocks).
function PostScreen({
  post,
  onBack
}) {
  const {
    Tag,
    Blockquote,
    Eyebrow,
    Button
  } = window.KharchoufEditorialDesignSystem_43c58f;
  if (!post) return null;
  const renderBlock = (b, i) => {
    if (b.type === 'h2') {
      return /*#__PURE__*/React.createElement("h2", {
        key: i,
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.6rem',
          color: 'var(--text-primary)',
          margin: '2.2rem 0 0.9rem'
        }
      }, b.text);
    }
    if (b.type === 'quote') {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          margin: '1.8rem 0'
        }
      }, /*#__PURE__*/React.createElement(Blockquote, {
        cite: b.cite
      }, b.text));
    }
    if (b.type === 'code') {
      return /*#__PURE__*/React.createElement("pre", {
        key: i,
        style: {
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          padding: '16px 18px',
          overflowX: 'auto',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: '0.85rem',
          lineHeight: 1.6,
          color: 'var(--text-secondary)',
          margin: '1.6rem 0'
        }
      }, /*#__PURE__*/React.createElement("code", null, b.text));
    }
    return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.05rem',
        lineHeight: 1.85,
        color: 'var(--text-secondary)',
        margin: '0 0 1.4rem'
      }
    }, b.text);
  };
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      padding: '36px 48px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.72rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: '22px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrow-left"
  }), " All posts"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      flexWrap: 'wrap',
      marginBottom: '14px'
    }
  }, post.categories.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c
  }, c))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '2.4rem',
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, post.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '28px',
      marginTop: '20px',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.7rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "Published"), " \xA0", post.date), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "Author"), " \xA0Youssef Kharchouf")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '44px 48px 70px'
    }
  }, post.image ? /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: '0 0 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: post.fit === 'figure' ? '16/10' : '16/9',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface)',
      border: post.fit === 'figure' ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: post.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: post.fit === 'figure' ? 'contain' : 'cover',
      padding: post.fit === 'figure' ? '5%' : 0,
      boxSizing: 'border-box',
      display: 'block'
    }
  }))) : null, post.body.map(renderBlock), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      paddingTop: '28px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "muted",
    size: "xs"
  }, "Thanks for reading"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement("i", {
      className: "bi bi-arrow-right"
    }),
    onClick: onBack
  }, "Back to listing"))));
}
Object.assign(window, {
  PostScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/PostScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/data.js
try { (() => {
// Sample content for the blog UI kit — drawn from the real kharchouf.com posts.
window.BLOG_POSTS = [{
  slug: 'dawn-of-everything',
  title: 'Book notes — The Dawn of Everything',
  date: 'AUG 17, 2023',
  dateShort: 'Aug 2023',
  categories: ['history', 'book notes', 'anthropology'],
  image: '../../assets/posts/graeber.jpg',
  fit: 'warm',
  description: 'The archaeological and anthropological case that our ancestors were conscious political actors who experimented with wildly different forms of social organization — and often deliberately rejected what is now assumed to be inherent in human nature.',
  body: [{
    type: 'p',
    text: 'Just to set up the book and give some context on the dominant view of the broad sweep of human history. A chatbot answer to the question "What is the neolithic revolution?" is the perfect example of what the book is criticizing.'
  }, {
    type: 'h2',
    text: 'Farewell to Humanity\u2019s Childhood'
  }, {
    type: 'p',
    text: 'There are two common and widely accepted views on the social evolution of humanity and the origins of inequality: the Rousseauian fall from an egalitarian state, and the Hobbesian escape from a brutish one. D&W argue neither is backed by the evidence.'
  }, {
    type: 'quote',
    text: 'What all this confirms is that searching for \u2018the origins of social inequality\u2019 is really asking the wrong question.',
    cite: 'Graeber & Wengrow'
  }, {
    type: 'p',
    text: 'Our early ancestors were not just our cognitive equals, but our intellectual peers too. Likely as not, they grappled with the paradoxes of social order and creativity just as much as we do.'
  }]
}, {
  slug: 'dynamic-prog',
  title: 'A first look into Dynamic Programming',
  date: 'JAN 19, 2017',
  dateShort: 'Jan 2017',
  categories: ['algorithms', 'recursion', 'code'],
  image: '../../assets/posts/complexity.png',
  fit: 'figure',
  description: 'A gentle first look at dynamic programming — how storing intermediate results transforms a naive recursive Fibonacci from O(2\u207F) to O(n), and why the name sounds considerably more impressive than the idea.',
  body: [{
    type: 'p',
    text: 'Something I didn\u2019t know existed until recently is Dynamic Programming. If, like me, you knew computer scientists use a lot of techniques to optimize their algorithms but were intimidated by the Wikipedia article, then this article is for you.'
  }, {
    type: 'h2',
    text: 'A simple recursive algorithm'
  }, {
    type: 'p',
    text: 'If you ever took a CS course, at some point you learned about recursion. The classic first example computes the n-th Fibonacci number — elegant, but with a deeper look, surprisingly bad.'
  }, {
    type: 'code',
    text: 'def fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)'
  }, {
    type: 'p',
    text: 'The time it takes doesn\u2019t increase linearly with n; this algorithm takes exponential time. The fix is memory: store each result you compute and pull it back instead of recursing again.'
  }, {
    type: 'quote',
    text: 'That\u2019s pretty much the idea of dynamic programming: Recursion + Memory.',
    cite: null
  }]
}, {
  slug: 'electrochemistry-basics',
  title: 'The basics of electrochemistry',
  date: 'MAR 02, 2024',
  dateShort: 'Mar 2024',
  categories: ['physics', 'chemistry', 'energy'],
  image: '../../assets/posts/voltammetry.png',
  fit: 'figure',
  description: 'Notes from the bench and the solver — cyclic voltammetry, the Koutecky\u2013Levich analysis, and what the shapes of these curves actually tell you about reaction kinetics.',
  body: [{
    type: 'p',
    text: 'Electrochemistry sits at an awkward, wonderful intersection of physics and chemistry, where transport and kinetics fight for control of the current you measure.'
  }, {
    type: 'quote',
    text: 'The shape of a voltammogram is a confession; you just have to know how to read it.',
    cite: null
  }]
}, {
  slug: 'cnss-analysis',
  title: 'What the CNSS payroll data reveals',
  date: 'NOV 11, 2024',
  dateShort: 'Nov 2024',
  categories: ['data', 'economics'],
  image: '../../assets/posts/histogram.png',
  fit: 'figure',
  description: 'A close read of Morocco\u2019s social-security wage distribution — deciles, geography, and gender gaps — and the quiet stories hiding inside an aggregate histogram.',
  body: [{
    type: 'p',
    text: 'Aggregate statistics are reticent narrators. Break the same payroll figures down by decile, city, and gender and a very different picture of the labour market emerges.'
  }]
}, {
  slug: 'brasil',
  title: 'Field notes from Brasil',
  date: 'JUL 28, 2023',
  dateShort: 'Jul 2023',
  categories: ['travel', 'essays'],
  image: '../../assets/posts/amazon-airstrip.jpg',
  fit: 'photo',
  featured: true,
  description: 'An airstrip in the Amazon, a borrowed flag, and the disorienting scale of a forest that does not care whether you understand it. Some notes from the road.',
  body: [{
    type: 'p',
    text: 'The airstrip ends where the forest begins, and the forest does not negotiate. You feel the scale of the place before you understand it.'
  }]
}, {
  slug: 'on-keeping-notes',
  title: 'On keeping notes in public',
  date: 'FEB 09, 2025',
  dateShort: 'Feb 2025',
  categories: ['essays', 'writing'],
  // No image — demonstrates the typographic fallback card.
  description: 'Why I write these down where anyone can read them, and what changes about your thinking when the margin of a book becomes a public square.',
  body: [{
    type: 'p',
    text: 'A private notebook forgives you. A public one does not, and that turns out to be the whole point — the small fear of being read is what makes the second draft honest.'
  }, {
    type: 'quote',
    text: 'You do not really know a thing until you have tried to explain it to someone who can talk back.',
    cite: null
  }]
}];
window.BLOG_CATEGORIES = [{
  label: 'physics',
  count: 1
}, {
  label: 'history',
  count: 1
}, {
  label: 'book notes',
  count: 1
}, {
  label: 'algorithms',
  count: 1
}, {
  label: 'chemistry',
  count: 1
}, {
  label: 'data',
  count: 1
}, {
  label: 'travel',
  count: 1
}, {
  label: 'essays',
  count: 2
}, {
  label: 'writing',
  count: 1
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Blockquote = __ds_scope.Blockquote;

__ds_ns.CategoryList = __ds_scope.CategoryList;

__ds_ns.FeaturedPost = __ds_scope.FeaturedPost;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.PostCard = __ds_scope.PostCard;

__ds_ns.PostRow = __ds_scope.PostRow;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
