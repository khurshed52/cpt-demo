<template>
  <div class="langPosition">
    <button
      href="#"
      class="flex items-center langDropdownButton rounded_btn language mr"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <img :src="`flag_${$i18n.locale}.png`" alt="flag" class="flagShadow" />
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" class="heroicon-ui"></path></svg>
    </button>
    <transition name="dropdown-fade">
      <ul
        v-if="isVisible"
        ref="dropdown"
        v-on-clickaway="hideDropdown"
        class="langBox"
      >
        <li v-for="(lang, idx) in langs" :key="idx">
          <a
            href="#"
            class="flex langHover"
            @click.prevent="setLocale(lang.shortName)"
            @keydown.up.exact.prevent
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <img :src="lang.flag" :alt="lang.longName" class="flag" />
            <span class="localLang">{{ lang.localName }}</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  name: "LanguageSwitch",
  mixins: [ clickaway ],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
      langs: [
        {
          shortName: "en",
          longName: "English",
          localName: "English",
          flag: "/flag_en.png"
        },
        {
          shortName: "ch",
          longName: "Chinese",
          localName: "中文",
          flag: "/flag_cn.png"
        },
        // {
        //   shortName: "es",
        //   longName: "Spanish",
        //   localName: "Español",
        //   flag: "/flag_es.svg"
        // },
        // {
        //   shortName: "ru",
        //   longName: "Russian",
        //   localName: "русский",
        //   flag: "/flag_ru.svg"
        // },
        // {
        //   shortName: "de",
        //   longName: "German",
        //   localName: "Deutsch",
        //   flag: "/flag_de.svg"
        // },
        // {
        //   shortName: "fr",
        //   longName: "French",
        //   localName: "Français",
        //   flag: "/flag_fr.svg"
        // },
        // {
        //   shortName: "ja",
        //   longName: "Japanese",
        //   localName: "日本語",
        //   flag: "/flag_ja.svg"
        // },
        // {
        //   shortName: "ko",
        //   longName: "Korean",
        //   localName: "한국어",
        //   flag: "/flag_ko.svg"
        // },
      ]
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      if (this.isVisible) {
        this.$refs.dropdown.children[0].children[0].focus();
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("lang", locale);
      // Uncomment the below lines if you need language prefixes to be shown in the URL
      // example: en.website.com (additional router configuration required)
      // this.$router.push({
      //   params: { lang: locale }
      // })
      this.hideDropdown();
    }
  }
};
</script>

<style lang="scss" scoped>
.langPosition {
  position: relative;
  display: flex;
  justify-content: center;
}
.langBox {
  user-select: none;
  padding: 5px 5px 5px -5px;
  box-shadow: 0px 3px 6px rgb(204, 210, 235);
}
// Language name text
.localLang {
    font-size: 14px;
    padding-left: 10px;
    font-weight: 400;
}
// Animations
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
.langDropdownButton {
  outline: none;
  cursor: pointer !important;
  background-color: transparent !important;
  border: none;
}
.shortName {
  margin-top: 5px !important;
}
ul {
  text-align: left;
  min-width: 138px;
  border-radius: 8px;
  background: white;
  z-index: 500;
  position: absolute;
  list-style: none;
  padding: 5px 5px !important;
  margin: 0px !important;
  top: 38px;
  left: -70px;
  z-index: 9999;
  li {
    padding: 5px 0;
  }
}
.flag {
    width: 28px;
    margin: 0;
    vertical-align: middle;
}
.flagShadow {
  box-shadow: 0px 3px 3px rgb(204, 210, 235);
  width: 37px;
}
.langHover {
  margin: 5px;
  text-decoration: none;
  color: #222;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: #007aff;
  }
}
.flex {
    display: flex;
    align-items: center;
}

.langPosition button svg {
    margin-left: 5px;
}
</style>
