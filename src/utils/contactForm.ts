"use client";

interface ContactFormConfig {
  formId: string;
  statusClass: string;
  successClass?: string;
  dangerClass?: string;
  hiddenClass?: string;
}

export class ContactForm {
  private form: HTMLFormElement;
  private status: HTMLElement;
  private config: ContactFormConfig;

  constructor(config: ContactFormConfig) {
    this.config = {
      successClass: "alert-success",
      dangerClass: "alert-danger",
      hiddenClass: "hidden",
      ...config,
    };

    const form = document.querySelector<HTMLFormElement>(config.formId);
    const status = form?.querySelector<HTMLElement>(config.statusClass);

    if (!form || !status) {
      throw new Error("Form or status element not found");
    }

    this.form = form;
    this.status = status;
    this.init();
  }

  private init() {
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData(this.form);

    try {
      const response = await fetch(this.form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        this.showMessage(await response.text(), true);
        this.form.reset();
      } else {
        const errorText = await response.text();
        this.showMessage(
          errorText ||
            "Oops! An error occurred and your message could not be sent.",
          false
        );
      }
    } catch (error) {
      this.showMessage(
        "Network error occurred. Please try again later.",
        false
      );
    }
  }

  private showMessage(message: string, isSuccess: boolean) {
    this.status.classList.remove(this.config.hiddenClass!);
    this.status.classList.remove(this.config.successClass!);
    this.status.classList.remove(this.config.dangerClass!);

    this.status.classList.add(
      isSuccess ? this.config.successClass! : this.config.dangerClass!
    );
    this.status.textContent = message;

    setTimeout(() => {
      this.status.classList.add(this.config.hiddenClass!);
    }, 6000);
  }

  destroy() {
    this.form.removeEventListener("submit", this.handleSubmit.bind(this));
  }
}

export const initContactForm = (): void => {
  try {
    new ContactForm({
      formId: "#contact-form",
      statusClass: ".status",
    });
  } catch (error) {
    console.warn("Contact form initialization failed:", error);
  }
};
