<template>
  <q-page padding>
    <div class="head-carousel">
      <q-carousel arrows animated v-model="slide" height="200px">
        <q-carousel-slide
          name="first"
          img-src="https://www.itu.int/en/ITU-D/Cybersecurity/PublishingImages/COP/471148_COP%20picture%20related%20to%20Covid-19.jpg"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h5">Corona virus</div>
            <div class="text-subtitle2">How much you know about it?</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="second"
          img-src="https://campaignforchildren.org/wp-content/uploads/sites/2/2020/04/ca_coronakids_040720istock-1024x626.jpg"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h5">Wash you hands, Bring the masks</div>
            <div class="text-subtitle2">
              To prevent the virus from coming to your door!
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="third"
          img-src="https://i.ytimg.com/vi/ZuAwPNfWxMU/hqdefault.jpg"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h5">Get to know about Medical Kit</div>
            <div class="text-subtitle2">How and when to use it</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <q-card bordered flat class="q-mt-sm row justify-center">
      <q-card-section horizontal class="funcs">
        <q-btn no-caps flat dense>
          <div class="column items-center no-wrap text-green">
            <div class="flex justify-center">
              <q-icon
                size="md"
                class="items-center"
                center
                name="mdi-lifebuoy"
              />
            </div>
            <div class="text-center">Health Skill</div>
          </div>
        </q-btn>
      </q-card-section>
      <q-card-section horizontal class="funcs">
        <q-btn no-caps flat dense>
          <div class="column items-center no-wrap text-primary">
            <div class="flex justify-center">
              <q-icon
                size="md"
                class="items-center"
                center
                name="mdi-share-variant-outline"
              />
            </div>
            <div class="text-center">Invite Friends</div>
          </div>
        </q-btn>
      </q-card-section>
      <q-card-section horizontal class="funcs">
        <q-btn no-caps flat dense>
          <div class="column items-center no-wrap text-negative">
            <div class="flex justify-center">
              <q-icon
                size="md"
                class="items-center"
                center
                name="mdi-nintendo-switch"
              />
            </div>
            <div class="text-center">Play Games</div>
          </div>
        </q-btn>
      </q-card-section>
      <q-card-section horizontal class="funcs">
        <q-btn no-caps flat dense>
          <div class="column items-center no-wrap text-deep-orange">
            <div class="flex justify-center">
              <q-icon
                size="md"
                class="items-center"
                center
                name="mdi-shield-account"
              />
            </div>
            <div class="text-center">Seek Help</div>
          </div>
        </q-btn>
      </q-card-section>
    </q-card>
    <q-card class="q-mt-sm">
      <q-card-section horizontal class="funcs">
        <q-card-section class="q-pt-xs">
          <div class="text-overline">WHO</div>
          <div class="q-mb-xs" style="font-size: 18px">
            How do vaccines work?
          </div>
          <div
            class="text-caption text-grey"
            style="height: 65px;overflow: hidden; text-overflow: ellipsis;"
          >
            This article is part one in a series of explainers on vaccine
            development and distribution... This article focuses on how vaccines
            work to protect our bodies from disease-carrying germs.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://www.who.int/images/default-source/vaccines-explained/screenshot-2020-10-29-at-11-16-19.tmb-479v.png?sfvrsn=e1e6b5b_12"
          />
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="q-mt-sm">
      <q-card-section horizontal class="funcs">
        <q-card-section class="q-pt-xs">
          <div class="text-overline">US CDC</div>
          <div class="q-mb-xs" style="font-size: 18px">
            COVID-19 symptoms
          </div>
          <div
            class="text-caption text-grey"
            style="height: 65px;overflow: hidden; text-overflow: ellipsis;"
          >
            Get to know some information about the symptoms of COVID-19 from
            CDC.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="data:image/jpeg;base64,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"
          />
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="q-mt-sm">
      <q-card-section horizontal class="funcs">
        <q-card-section class="q-pt-xs">
          <div class="text-overline">WHO</div>
          <div class="q-mb-xs" style="font-size: 18px">
            Scientist found what
          </div>
          <div
            class="text-caption text-grey"
            style="height: 65px;overflow: hidden; text-overflow: ellipsis;"
          >
            Scientists tackle vaccine safety, efficacy and access at global R&D
            forum.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUQEBAVEBUVFRUQFRUWFRAVFhYVFxEWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQGi0lHyEtLS0tLS0tKy0rNS0tLS0tLy0tLS0tLS0tKy8tLS0rLS0tLS0rLTUtLS0tLS0tLS0rK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABBEAACAQIEAwcBBQUFCAMAAAABAgADEQQSITEFQVEGEyJhcYGRoQcyQrHBFFJi0fAjcoKisjM0Q1PC4eLxF2OS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKhEAAgICAgEDAwMFAAAAAAAAAAECEQMhEjFBBCJREzJhQtHhBaGxwcL/2gAMAwEAAhEDEQA/AHUqcMRI2nThSpEWRhY4CSZZ0CADFWPCx4WSKkYiNaceKcmRJMtOAAwpTvdQwUo8UoCA1oyQUoYtGPFGAAPcxCjLDuZ3uYAV/cRdxLHuohRiGAChHChLAUY7uZLGV4oTooQ/u5U8Z4tTw6qzEC7MLaD7iMx/JfZr8pLGT9xOmkBvpyhVYW0uATt5kC9pivtA46aD4YoLhaqO+pGlSjXXIfUXPkQIhmr7kThoQThGODUxWZrK47wE6eGwtfncjW3K9t5Z4eqHGYAhTsTbUdYhgbUJA9CWzJIXpxiKarQgdXDy8qU4HVpxiKOrQglSjLqrTgVWnGBUvSkD0pZVEg7rEBXPSkD0pYukgdIhleacUKKRRAbKmJMsgQyVTNSSS06BOCTIIwOKslVZ1Vky04xDUWEIsFxuKNHKcmZTq2/3QQCR5gG8MwmLRyyaBlO1/vDky/qOXwSrV0X9OXHl4JVSSrTjHxVNdGYaEA+RJAF/ciGKsdkNNES048JJQscBARDknckmtFaICIJOhJKBO2iGRhIssltGssljRk+PcRNMO1R2VA5pFlOVkOhRh/l67+c8m7ZcYr1KgHe96q2syhVzHLuQpIzDMRcWvbbSehfaFWKLkBR+8IBDbABs2YjZWFzrzHI2E8vq0Cty3ivtvcnlb53kXs04ug+p9oeNfuTcBqRzA2U5jkKXYW1OU/IvKDinEsRWJNapmuwc3NvEM2U+wYgdBpFSps1vDlsbEgaEHrbmLe95Z0uE1TYhSUG9xofY85VpCUZSLDsxxtKRLVqj1E0K3ZmSmxvdcrbg+Q23E9Z4RxhsS3eU2XuzchAhzMNswcvtf+ATwfE4az5VOnLoD5wvhPG8XhLEIrILkB6YZdeYceJdehH1MKsHrs+g++W4UmxN7Dmbb2HQdfOdYTz3sNxytic7Ve8Jd1Bqh1RE8NhTyLYgFs2X8Ou4J19CpUsotr7xCIKiwSqksHWDVVlCKuskCqpLWssBrJGBWVUgtRJZVVgtRYAAOsgdIa6yF1kjAysUmKxRAaCm0nQwJGhVMzUQQsIpyCnCUjETUxCEWQ0hC6awEdekGW1gSNQDseoPr/KZ58NTVu8DsCrBmomwZL6Cw3GvPa3zNOqyLiOBWqhDKGYAlDzBtpY8tbSJxs1xZeOn0ZLhXG8PmNXEHxBzlp/8sA6MF/Ex3vuOU3GGrK6h0YOrC4YG4I6gzGcX7NYR171nNE21OZfF6ggzPYPFrh3CUaruhNvCTbX94DflMoz46OjJi+o7R6ZW4tSSolNr3qNkU2uC3Idfe0sZnuydEupxNTxOxZEP7qKcpt0uwN/QTRCbRurZyZFFOkK07adtOgRkHAJ206BO2iGNtI6+0mjWWSxnjvabFnFVXF7KjCmi+ZvmY/r6QrhHAalZTYFA9szgDN3dtEToSNSTprz0Ebwnh6VcRXL1cpTEVA1IJqKYuRUYkiyn7u2625zZpxKjRZVzg3/CALgdSBtOdp2d2Oq0gLBdjcPSs7oDbZBqoHLfVjpuZZYvB0ch8AAtzAMsWqqy3GsrcbTrOLLkUEaZr3PprG18Di/LZ5F2g4YO8Zh4QTt0W8pK9N1AXPpbY62Fztvaxvp6dZtO1uHZRZ1s46bH0mGrVcwudwf6MeJvpmfqEk9Gp7DYqvTqGnTy5aiklDlYtbQimOutiOm89f4f3mRc9jpuCST6gqJ5p9lWGSozswBakVYX3ysrC497HrpPVlE1OZkbCD1FhbCQVBGhFfVWB1VllVWB1VlCK2qkEqLLGqsEqLAACosgZYY6yBxJYwUrFJcsUQwykYZSlfSaG0TNCQ6nCqYglEwylGATRELpiD0hCqcBEqiSrGJJlEYjH9o+Fhs9OpbIRnp73F9x6A/pMHicCaFslRsrKCL6X5HT1H1nr3G8KHpj+Eg/4Tof0PtMN2r4IbhgfCFsqjYD+iT7zlyRpndinyjs3vBcJ3NClS/cRQfM28R+bywEq+zmN77DUqnMoA399fCw+QZaCdK6OJ97HRRToiA6BOxCdkjOThEdORAZHGcDSniKjKthXVHY73amWzL6eJG9jB8H2WFw4Iv3jPUY5izA2yqtiMoGotr87ani6/2eYbqQ0BwhZg1qlh0AAOo2zTK6kdcPdAHrEUkbmQLjWxYouxtvqLW8pSYzsl3ypUdi7lu8qOzVM9jfw07Gy2uNPLzhnF/2yp3VMYZFCgtUqZ9AQPCEG7XPW1hLerjhTQZlOg/DlPtqREpUaSx9UYjj9B6NKn3lquUmndwCSALqSevKeY4ktUqVVCU6dr2yhxfU62115k6Tc9rOONiHyhciJewvqTzLeci7J8Bdqpup/tRaxtot/E/kOfwOchTrop4lLvx2bfsJwGlQoU6yjx1KNLN6imub5YE+81FpyjRVFCKLKoCj0AsJ0zoRwPvQxpBUk7SF5SJBqgglVYa8GqiMCvqrA6qywqiCVRAAGosHcQuoIO4iYA1oo8iKIYyk0PoGVFCpLPDtLEWdGHUpX0DD6JjAMpQtIJSMKSAghZKshWSgxiHFQQQdiLH0Mp8dhs9Mg7i49xpLkGBuLOw6gN86H6iZzVmuJ0zN9hsR3dSthG698n0Vx/pPuZtBPPuP5sNXp4pBfI1yP3lOjL7gmbvB4lKiLUQ5lYBlPkYsb1XwPNHd/IROiNEcJRkOnY2K8kY6KcjS46wGNrpmVl6gj5EzmHY0sx5b+eg2+k0NXEKNL62vKPGVqbVciMCWQVCpB2JI+v6zLIvJ0YJVaZmcb28pM/cLTqlrkEd3UutjY5hl0GnOO4m1V6akn09DD6/BnLXZtOjEkabX6+8qeLcVVFIvte36TCR3twX2lXw3goxGIWhsDdnI3Cjf35e89IwWAp06jd2oUBVTcnz3JvMN9mvGqL4itSJtVZQyC26KTn163Km3QeU9BpNuepPxym2ONI4M2RuTS6JSYwmNZ5GXmhgPJkTmIvI2aWhDXg1STMZC8YgWrBKghlQQWoIAB1RBnhVWDOIDICIo4iKSBTYR5b4ZpQYNpdYVpYi5oGH0TKzDmWFAxgWFIwumYFSMKpmAgpDJAZApkqmAEt4Pi9Creqn31H5H5kwMbiEzKRz5eo1ETVocXTKTtBg+8QiU/YniZo1WwVU2ViXpE8m3ZfQ7+t+s1CEMt5hu1nDAz7aHSczfF8jsUeS4s9NRwdiD7iPe9jlte2l9RflfymS7O4d6eFw1NjdvuFueVqjEX/wkTUOLMOVzYzpqzjarRjeIcdxgZkZhTZTYhVH0J5Sl4LxHG4jHJT/aavdoDVqAMQCq7KbdTYTYcZ4YtdUqDwnQFrX8NrkedtwPWBdguGZFqVGAzVqhp+iJdQPnN8xujwsHpvUQ9bU5tx7Vv/RrgtxfeDVDYQqjcXU8jb6QbFDxL5sIj3kRLRs/nlUe5bX8pm+NEYbF0qhGam1MUW/uggH3HgPtNdWFiGPkD9R+sr+OcMXEIaZNmBzo3Q2tY+RkyVouLp7K/tBga/cucNU1CMwBsb2UkDr0mXpdiLjvMViCTzy5Qo01tcHTzhdTtXiqadyEUMgyFnuzXGl7bX+ZV4XG18c5wwN8wGeoxcmmoOpABCC+2ig67yKg/BpeRLbKbstwZWxLVad7BiAb6kXsNRPU8PilsQdLMU1525xcK4RRw1PJTXYasbFmPUmFUqIygEDz0lqGjOUrB6lSDiuc1jz2hWIw4tpp8QKrT5H2MyyQkla8Gc26tBBaMJkaMba7jT/1O3lwfJWCkpK0dJkbmOJkbGWMieDVIQ8HeAAtSDOIW4g7iAA5EUkKxRAZTBGXWFMpcGJc4WUIt8OZY0TKzDmWNEwGHUjCqZgVMwqmYCClMlUwdATsCfYx6vGIIBjwZCrR6mAAdTwORybxD33Hz+crsfg+8sPOXOKoCotr5SNmGtj6cx5SlAxFF27wB0sAjKHGp+8X3C2Gm+t/KYuDbrwdMMiS/JdBUC022CkMPQbfS07TxOZgSLCzVPYWt+sqDjGNlRgdLG9iAPWOfimXVyLORTAVHZyF1OVV335dROh6Oeg7Bucopk6qcjDocp/Q6eREZw6n3J7snZ+80/ic6fP5yn7Q4upSP7RS8DFSrCojagDMptcEEXIvJeB46pXVKtQrmLMPCCosCORJPISWvJgsuKWfh+pL+zr+DWBrsT5kwbF/dv01kwO/r+kYwuLRHQiUm4HnBa1RkN7XFrX/AJiPwr+Gx5XEc8BmF7YY3DU61zSFSqyBiMxC8wtxzNh9BLD7PaFMYYOoGZyS5G97nw+gmZ7YOGxdW4BtlA9qa/reW32dPbvaY0F1cC+xYEH/AEzOL9xrJe03FYeE2j2U9I2qhyGOVrgG282MBlRVALNoACx9ALyuo0u8XOwN21AH4Ry95PxhiU7sbuVT2Ju3+UGSVXFJNBfl6mUIBUZSab+WvQ20MicEGx5QDBVnYuam5bMPIWAt7WlmvjX+JR8r/MflMWqYdOyImRsZx6gG5AvtcjWRvUF7XF+lxf4jKGuZA5krmQPACNpEwkpjGEAISIo+0UQGQwiy3wwlZhRLXDxgWNCWFGAYcQ+kIAF05OpkFOVXavtCmCo5yMztdaafvNbc9FHM/wA4AWXF+31LCq1FsLiKvdLTLvTWmaY7y+QMxYWJsdI/s/jO+orXAyireqFOpUNsD56azwuti6tUvWquXeoczHkeQsOg2Amp+zvtU1BxhaxvRdrIf+W5P+kk6+t+sSyW6LeKo2ewKYNxLtthsIGo1KVZ2p01rOaaU2UK9RlW5LjUkQHtNx2ngaBr1NT9ymnN3I0UeXMnoJ5Bie/r58TWu1SqcxNrAKNFVRyUDQCKc+KsMWLnKj2/gGOWvRXEKCFrf2qg2uFIAAaxIvpylqpnjH2cdqmw1UYKub0ajWpk/wDDdjt/dJ+J7OgjTtWRKLi6GVcHSf79NW9VH5yShh0T7qgf15x4EdaAjM9uv9ig6s35D+cF4AlRaKsEzKS2XKVzXDm9w1uQPMyT7QKpVKVurn4yfzhnAP8AdKJ6s5/zPNY7SR40W1/UMkl4iv8Akt8HWzgnKV8my328iZNB8D+L1/6RJS1jE1TPWxycopsagsx8/wA50N+sVTeRre8RoeV9oXviq5/+xx8MVH5S0+zyt/buvVFP/wCW/wDKUPFXvVq+dSoflyZZdgWIxg86bj30P6TCP3G8vtPWCdCPKQ4er+E+06jGQVGy3O2uk6kco6q13A9W67AD9ZK6qRY6+usiw9WnfWwa1gL62Pl7SepsbD6RiKHi1BUZWW4BuD0B0P8AP4g9KsQQQbER3FcNULqTVYgXsmXw3ta9wNOe/WDYcOb5V1toTtfr5zHI62a448tEPaLAZ7ZQCzEDJzB/h52lPxHCOLKhLMtrtqSLcyZb4ziBw/dIR3jkhCo+9l5sDyI3EYOGYlc5FYVDU8S3WwtyItt5icrVs74tL2vqtAvDeKmq7U2WzKM1xsRe2vQw5pmaFN6K1bsyVM12IW+bprrZZf4Gqz00ZxYkAmbwlemcubHxdrokIjSI8mNlGJHlij4oAZLDiWeHlbhzLCg0Yy0oQ6lAMOYfQk8kOmG0p5h9rzH9pwy32pMfmpb9BPT6bQhOE4fELbEUKdbKdM6KxG2xOojW9A9bPNu3ZqZaCFKCHuVJNOjTQnMMviOt9BvMlT4eCBUB+66C3qRqD7z0T7VMIi1aQRctqY0BJ/E1vylp9lHAcLXw9WpWpLVYVQgzagWRWuB1ud5zO3lcUzsVLDzaOduOyWJ4icOuHKWpF2cO1vvKoFhbXYxnavD16NKnh3qU1amig2op+7YWYHXYzbrmSuqpexDXGh22M89+07id8WE2IpUwR/iqazT1CqFpmXpHc6Z5pj6LK6sXLHOBsBtYgz6UQT504jlup38QM+h0xK8zb+vKLBK4bD1UanoJAnbSAYlP3vzktOqraA39N5q2cyRi/tIb/ZD+Gs3wactOAf7lhj1zH5zmF8d7K4bFkGsWJCsgs7LYMQW/ITtHstRWmtJGdFQ3BVsp2I1I3GphHNVa6OR+hf1p5U/uVf4/YJwmhPsfoI+qP+3rO0eGhPusdrakmONA9QfmDyq+jrx4mopMhR7i3SKj96DcYxH7NTauy5gLbbkk2G/K5g3BeJmrSSswAL5jlHKzEc/SOGRSdFSg0rMJ2fwNCvXYYir3S730UFi2xY7T1Dg/ZHBUStWkl2ANnzu2hFjzt9J4h+25SbWIvqDsbHmJ6LwXt+uHw9Ja1LwkZVKcgL7hjM4yS7LlGUuj0T9kQcvqZn+P4mlTemlxmdrAZh0PKUvF+0FOrqjVADr+AfS8y9fCUxWpVwzlu81zEWtkY6AbagTfZkoryaDhmPw1TiNWzsKtNBQCkeEqVVyQ251PPa3nNbnnkOBq24k1Xa7g+wAB/wBM3vaPilShQL0grvdUQNfLmZrXNuQFz7SlLv8ABLi9FxilQjxEL/XUyrwJ8FgdbbzAPh69ds+JrtWOpAJsgv8Au0xoB63M2XC2bILdLfpMJ5FJnXjxuCYxMKjYkaXKqSWO5JIHsJfmmLWOnMHof5Sv4fhrMXOpP5dI/imOCISf68pCqipptlDxdb1gp0IvnHUcgfIm07mk1Emuvit3yjQ/voLnL5sBAs8qOkc8pub34Ji0V5DmnQ0qxUS3ikeaKKxGRw7yyw7Sowxlph2ks0Rb0GlhQaVdAywotJGWVJpnu0HbargMQlLuUq03QPqzIwbMVazC4OgXS0vKbCU3afg9HFZVqpmy3IIJBF97EeglJ1sTVlH9o3FxUro6ZbdyosGzAEZufvNN2I7EUa+Fw+LGJxFF3RajqjkU2NzoQLXHlflMx/8AHuEG/eny7w2npfZbiGDwuHp4c1kpd2uUK7ZTYE823jxxjzcvJWTJLgoro8T7dcNfB42rTTEVagS1neo3eC6BiLg6b/SUeE4pqxdix6sST8maDtxQrYzieJehSerTaooVlByFRTRSQ21tDJeHfZuza1WyDoGuYppdSFjlJbiZt8R3jIi6lnAA8ybAfJn0FRcnSYzgnYjCUHWoFJZSGDMSbHyvPRaagbCSq8Dk5XbB6dAmHYOnZvaMzCPpvrpGyQvvFG5HnGNiqPNwPe0wjPiqb1AufVmNiMw1YnTymd49xPiLKy0nq3YZbKoGnrbSafTVXZNyvo9gLjlYwBuLUhVNH8QAZtVAAO2+plLw7Gmnh6VNvvrSpqRe+oQA6yur9lq+MZsRTqKpJCkG99FGxnMpW6R0Rxx/U6LftZVSrhnTvFS+U5iRYWYHX4lH2bxFqCBSGAzWI2+8dRKbivYbF6q1j/F4vyh/ZvBvSpLSvfKWBNv4jNFp2OcYqNJ2U2L4DRVXcZgQCQMwI066TnA+zz43wN3iIlsrBbgk3vvvtL/iNJu6qXX8J1lx9ntUkdyzXAsVF9gQDb5MUU2RJqIRX7JJRsiF3UKNTrrbW9v61lFxThuR6VjvUy/NN5teN484e+Q/NzMRU4lVr9zUexJrDYW/C4tabuTWjFJPYDS4FWFbOCumoIJ3+Jadoqdd1p5KebK7MwBXS9MgHXfUke8sMTi1o5WcWzOtPloT1k1TEXF0NNh/ejSbv8haTRlsBQqZ8tRGQEaHQgHztLOhVNM5b2HXcS1DUcueo6pbfUW+srMbSpvoQD5znnBo6ceRMIqccRBZm95UYvGGq2b8I2HXzMDfg1EOGAOhv95rfF5bLg6Y2EUQyS1SBEqEEEGxGokaXBNzcee8ONBekjakvSNq2n8HK8dyUvgHzzneR9SkIPUUDnKsuiXvYoEWijsVFdQ4VU5FT/iEsKPDaw/AfYiZqhUI5n5Ms8NjHGzt8mOgsvaeGqjdG+DCkzDcEexlbh+K1h/xDLGjxutzIPqBCgsLpVJPTsTIafGj+Kmh9oTS4rSO9Ee0Egsbi28UssFlK6gHSBPjMIx8asD5Ew7D1MOR4XYesEtg3oCqLdj6x5UQ1MLSJutYe8eeGk7OpkuI1ICprqJaK0gTh1QHYH0Mn7hxupgotA2mdvHAxmU8wficjaEMVm7wm1xYj6TMYzh9dnugy66knlNKpsbyIi5mMoWdkfUyUa11RzCcNVfvHMZc8PqZLhDby5QNDpGhtZcVx6OaT5dh+PxzWILD2GsqsNQRR4R1PuTO1TedTaVdsmqRDXVTcEAg6EQrgdNFYBVCjy0glWS4F7NEnTG1aCeOIpY3Gb11lYlBAqgIBZsw02Ouv1lpxRwT7Sudtpd27ElSoru0nDf2ilkzZbEOOhI5GZFuC4jIxCKQu9jN3iGFjBEdhTqLYMCORkyzTg/ajfFhxZE+bpnlWL4TWdxlW1mBN20FjNlTxbk7+UhxOBZnFrKL66w6nQVfOZ85ZFclQ5Y4YpNQdoaXY8oThqhAsZGagkL1bbGCRMnaD2qSJqkE7+RtWlGZPUqQSrVjKlaC1asYh7VIoGak5ChFRRMOomKKaEBtJoXTaKKIApHkqvORRjHFrmWODewiiggZNni708iRORRsEE0MW4/GfmH0uJVP3jFFEgYSvFH8j7SUcT6oDFFGIRx9I/epxCphzyI+Z2KICVadM7MfidODvs30iihSCyNsA3USJ6Djl9RORQoOTBKwPOdwrRRSKNLO4ytrAalaKKAA+Kr6QH9rIBEUUTHFlc+I1j2rRRRJDsHatGNWiijCyIVojViiiIZE9SDVXiijAGLRRRRhZ//Z"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      slide: "first"
    };
  }
};
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 3px
  color: white
  background-color: rgba(0, 0, 0, .3)
.funcs
    padding: 0 6px
</style>
