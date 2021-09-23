class Tabs {
   constructor() {
      this.tabsBlocks = document.querySelectorAll('.js-tabs');
   }

   init() {
      this.tabsBlocks.forEach(block => {
         const buttons = block.querySelectorAll('[data-tab-button]');
         buttons.forEach(btn => this.#bindSwitchButtons(btn, block));
      })
   }

   #bindSwitchButtons(btn, block) {
      btn.addEventListener('click', e => {
         e.preventDefault();
         this.block = block;
         this.buttons = block.querySelectorAll('[data-tab-button]');
         this.panels = block.querySelectorAll('[data-tab-panel]');
         const tabId = btn.dataset.tabId;
         const panel = this.#getPanelById(tabId)
         this.#deactivateButtons(this.buttons);
         this.#deactivatePanels(this.panels);
         this.#showPanel(btn, panel);
      })
   }

   #showPanel(btn, panel) {
      panel.dataset.tabPanel = 'active';
      btn.dataset.tabButton = 'active';
   }

   #getPanelById(tabId) {
      return this.block.querySelector(`[data-tab-panel][data-tab-id = '${tabId}']`);
   }

   #deactivatePanels(panels) {
      panels.forEach(panel => panel.dataset.tabPanel = '');
   }

   #deactivateButtons(buttons) {
      buttons.forEach(btn => btn.dataset.tabButton = '');
   }
}

const tabs = new Tabs();
tabs.init();
