"use client";

import { useEffect } from "react";
import $ from "jquery";

export default function ClientScript() {
  useEffect(() => {
    // FAQ Accordion
    // Diberikan off click untuk mencegah duplikasi event akibat React Strict Mode
    $(document).off("click", ".faq-question").on("click", ".faq-question", function (this: HTMLElement) {
      const $this = $(this);
      $(".faq-answer").not($this.next(".faq-answer")).slideUp();
      $(".faq-item").not($this.parent(".faq-item")).removeClass("active");

      $this.next(".faq-answer").slideToggle();
      $this.parent(".faq-item").toggleClass("active");
    });

    // Mobile Navigation
    $("#menu-btn").off("click").on("click", function () {
      $(".nav-bar").toggleClass("active");
    });

    $(".nav-link").off("click").on("click", function () {
      $(".nav-bar").removeClass("active");
    });

    // Back to Top
    $(window).off("scroll.backtop").on("scroll.backtop", function () {
      if ($(window).scrollTop()! > 300) {
        $("#backToTop").fadeIn();
      } else {
        $("#backToTop").fadeOut();
      }
    });

    $("#backToTop").off("click").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 0);
    });

    // Nav kategori berubah warna saat menempel
    $(window).off("scroll.sticky").on("scroll.sticky", function () {
      const navEl = $(".kategori-nav")[0] as HTMLElement;
      if (navEl) {
        const batas = parseFloat(getComputedStyle(navEl).top) || 0;
        const navTop = navEl.getBoundingClientRect().top;

        if (navTop <= batas + 1) {
          $(".kategori-nav").addClass("stuck");
        } else {
          $(".kategori-nav").removeClass("stuck");
        }
      }
    });

    // Pencarian menu
    $("#searchMenu").off("input").on("input", function (this: HTMLInputElement) {
      const kataKunci = $(this).val()?.toString().toLowerCase() || "";

      $(".kategori-menu").each(function () {
        let jumlahTampil = 0;

        $(this).find(".card-produk").each(function () {
          const nama = $(this).find("h4").text().toLowerCase();

          if (nama.indexOf(kataKunci) > -1) {
            $(this).show();
            jumlahTampil++;
          } else {
            $(this).hide();
          }
        });

        if (jumlahTampil === 0) {
          $(this).find(".judul-kategori").hide();
        } else {
          $(this).find(".judul-kategori").show();
        }
      });
    });

    // Mereset pencarian saat kategori diklik
    $(".kategori-btn").off("click").on("click", function () {
      $("#searchMenu").val("");
      $(".card-produk").show();
      $(".judul-kategori").show();
    });
  }, []);

  return null;
}